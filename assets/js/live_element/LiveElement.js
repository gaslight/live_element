import LiveSocket from './live_socket';
import { Socket } from 'phoenix';
import View from './view';

class LiveElement extends HTMLElement {
  
  connectedCallback() {
    this.liveSocket = new LiveSocket(this.url, Socket, {})
    this.liveSocket.enableDebug();
    this.liveSocket.socket.connect();
    this.view = new View(this, this.liveSocket, null, null);
    this.liveSocket.roots[this.view.id] = this.view;
    this.view.channel = this.liveSocket.channel(`lve:${this.id}`, () => {
      return {
        params: {module: this.module},
        session: {}
      }
    })
    this.view.setHref(this.liveSocket.getHref())
    this.view.join();

    this.attachShadow({mode: 'open'});
    this.renderRoot = this.shadowRoot;
    this.bindEvents();
  }

  bindEvents() {
    this.renderRoot.addEventListener("click", (event) => {
      console.log(event);
      const { target } = event;
      let phxEvent = target && target.getAttribute("phx-click")
      if (!phxEvent) { return }
      this.view.pushEvent("click", this, this, phxEvent, {});
    }, true);
    this.renderRoot.addEventListener("submit", (event) => {
      console.log(event);
      const { target } = event;
      event.preventDefault();
      let phxEvent = event.target.getAttribute("phx-submit")
      if (!phxEvent) { return }
      // event.target.disabled = true;
      this.view.submitForm(event.target, this.renderRoot, phxEvent);
    }, true);
  }

}

export default LiveElement