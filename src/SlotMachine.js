const styles = getComputedStyle(document.documentElement);
const slotHeight = parseFloat(styles.getPropertyValue("--slot-height"));
const slotCount = parseFloat(styles.getPropertyValue("--slot-count"));

const slots = document.querySelector(".slots");

class Slot {
   constructor(height) {
      this.value = 0;
      this.ul;
      this.height = height;
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
      this.value++;
      this.ul.style.transform = `translateY(-${this.value * this.height}px)`;
   }

   reset(e) {
      if (e.propertyName !== "transform") return;
      if (this.value >= 10) {
         this.ul.classList.remove("trans");
         this.ul.style.transform = `translateY(0px)`;
         this.ul.offsetHeight;
         this.ul.classList.add("trans");
         this.value = 0;
         return;
      }
      return;
   }

   getValue() {
      return this.value % 10;
   }
}

class SlotMachine {
   constructor(container, count = 4, height = 240) {
      this.container = container;
      this.slots = [];
      this.count = count;
      this.height = height;
   }

   init() {
      for (let i = 0; i < this.count; i++) {
         const slot = new Slot(this.height);
         slot.init();
         slot.mount(this.container);
         this.slots.push(slot);
      }
   }

   getValue() {
      return Number(this.slots.map((slot) => slot.getValue()).join(""));
   }
}

const machine = new SlotMachine(slots, slotCount, slotHeight);
machine.init();

// const btn = document.querySelector("button");
// btn.addEventListener("click", () => console.log(machine.getValue()));
