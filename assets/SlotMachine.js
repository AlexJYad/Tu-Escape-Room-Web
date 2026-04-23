const slots = document.querySelector(".slots");
const styles = getComputedStyle(document.documentElement);
const slotCount = parseFloat(styles.getPropertyValue("--slot-count"));

class Slot {
   constructor() {
      this.value = 0;
      this.ul;
      this.height;
      this.root;
   }

   init() {
      this.root = document.createElement("div");
      this.root.classList.add("slot");
      this.ul = document.createElement("ul");
      this.ul.classList.add("trans");
      for (let i = 0; i <= 10; i++) {
         const li = document.createElement("li");
         li.textContent = i % 10;
         this.ul.appendChild(li);
      }
      this.root.appendChild(this.ul);

      this.root.addEventListener("click", this.onClick.bind(this));
      this.ul.addEventListener("transitionend", this.reset.bind(this));
   }

   mount(parent) {
      parent.appendChild(this.root);
   }

   onClick() {
      this.height = this.ul.querySelector("li").getBoundingClientRect().height;

      console.log(this.height, " ", this.value);
      this.value++;
      this.ul.style.transform = `translateY(-${this.value * this.height}px)`;
   }

   resetToZero() {
      this.value = 0;
      this.ul.classList.remove("trans");
      this.ul.style.transform = `translateY(0px)`;
      this.ul.offsetHeight;
      this.ul.classList.add("trans");
   }

   reset(e) {
      if (e.propertyName !== "transform") return;
      if (this.value >= 10) {
         this.resetToZero();
         return;
      }
      return;
   }

   getValue() {
      return this.value % 10;
   }
}

class SlotMachine {
   constructor(container, count = 4) {
      this.container = container;
      this.slots = [];
      this.count = count;
   }

   init() {
      for (let i = 0; i < this.count; i++) {
         const slot = new Slot();
         slot.init();
         slot.mount(this.container);
         this.slots.push(slot);
      }
   }

   getValue() {
      return Number(this.slots.map((slot) => slot.getValue()).join(""));
   }

   resetValue() {
      this.slots.forEach((slot) => slot.resetToZero());
   }
}

const machine = new SlotMachine(slots, slotCount);
machine.init();
