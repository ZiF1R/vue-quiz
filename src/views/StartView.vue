<template>
  <div class="start">
    <h1>{{ appName }}</h1>

    <div class="input__container">
      <input
        ref="email"
        v-model="email"
        autofocus
        class="input_primary"
        type="email"
      />
      <label :class="{ 'label__on-top': email.length > 0 }">Email</label>
    </div>

    <div class="input__container">
      <input ref="name" v-model="name" class="input_primary" type="text" />
      <label :class="{ 'label__on-top': name.length > 0 }">Name</label>
    </div>

    <button @click.left="toQuiz" class="start__button">start</button>
  </div>
</template>

<script>
export default {
  name: "StartView",

  inject: ["appName"],

  data() {
    return {
      email: "",
      name: "",
    };
  },

  methods: {
    toQuiz() {
      const userEmail = this.$refs.email.value,
        userName = this.$refs.name.value;

      if (
        userEmail === "" ||
        userName === "" ||
        !userEmail.match(/(.+)@(.+)\.(.+)/g)
      )
        return;

      this.$router.push("/quiz");
    },
  },
};
</script>

<style lang="scss" scoped>
.start {
  display: flex;
  position: relative;
  flex-direction: column;

  width: 370px;
  padding: 20px 30px;
  background: var(--card-bg-color);

  border-radius: 10px;
  text-align: center;
}

h1 {
  margin: 10px 0 30px;
}

.input__container {
  position: relative;
}

.input_primary {
  display: block;
  position: relative;
  padding: 10px 7px;
  width: 100%;
  margin-bottom: 10px;

  color: #fff;
  font-size: 1em;
  border: 1px solid #6c6c6c;
  border-radius: 2px;
  outline: none;
  background: none;
}

.input_primary:hover {
  border: 1px solid var(--primary-color);
}

.input_primary:focus {
  border: 1px solid var(--primary-color);
  outline: 2px solid var(--primary-outline-color);
}

.input__container label {
  position: absolute;
  top: 50%;
  left: 7px;
  padding: 0 5px;
  background: var(--card-bg-color);

  color: #b6b6b6;
  pointer-events: none;
  transform: translateY(-70%);
  transition: all ease-out 0.18s;
}

.input_primary:focus ~ label {
  color: var(--primary-color);
  top: 0;
  transform: translateY(-50%) scale(0.75);
}

.input_primary ~ .label__on-top {
  color: var(--primary-color);
  top: 0;
  transform: translateY(-50%) scale(0.75);
}

.start__button {
  outline: none;
  border-radius: 2px;
  border: none;
  background: var(--primary-color);
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 0;
  cursor: pointer;
  color: #222;
  transition: all ease-out 0.18s;
}

.start__button:hover {
  background: lighten(#42b983, 5%);
}

.start__button:active {
  background: darken(#42b983, 5%);
}

.start__button:focus {
  outline: 1px solid var(--primary-outline-color);
}
</style>
