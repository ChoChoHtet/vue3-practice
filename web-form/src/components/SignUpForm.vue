<script>
export default {
  name: "SignUpForm",
  data() {
    return {
      userEmail: '',
      userPassword: '',
      role: 'designer',
      terms: false,
      topic: [],
      skills: [],
      tempSkill: '',
      passwordError: '',
      isShowingResult: false
    }
  },
  methods: {
    addSkill(e) {
      if (e.key === ',' && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill.replace(",", ""))
        }
        this.tempSkill = ''
      }
    },
    deleteSkill(data) {
      const index = this.skills.indexOf(data)
      if (index !== -1) {
        this.skills.splice(index, 1)
      }

    },
    submitSignUp() {
      this.passwordError = this.userPassword.length < 6 ? 'Password must be at least 6' : ''
      this.isShowingResult = !this.passwordError
    }
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="submitSignUp">
      <label>Email: </label>
      <input type="email" required v-model="userEmail"/>

      <label>Password: </label>
      <input type="password" required v-model="userPassword"/>
      <div class="error" v-if="passwordError">{{ passwordError }}</div>

      <label>Role</label>
      <select v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
      </select>

      <label>Skill: </label>
      <input type="text" v-model="tempSkill" @keyup="addSkill"/>

      <div class="skills" v-for="skill in skills" @click="deleteSkill(skill)">
        {{ skill }}
      </div>

      <div class="topic-container">
        <input type="checkbox" value="vue" v-model="topic">
        <label>Vue</label>

        <input class="topic" type="checkbox" value="springBoot" v-model="topic">
        <label>SpringBoot</label>

        <input class="topic" type="checkbox" value="quarkus" v-model="topic">
        <label>Quarkus</label>
      </div>
      <div class="terms">
        <input type="checkbox" v-model="terms" required>
        <label>Accept terms and conditions</label>
      </div>

      <div class="submit">
        <button>Create Account</button>
      </div>

    </form>
    <div v-if="isShowingResult" class="result">
      <h3>Output Result</h3>
      <hr/>
      <p> Email: {{ userEmail }}</p>
      <p> Password:{{ userPassword }}</p>
      <p> Role:{{ role }}</p>
      <p> Terms And Conditions:{{ terms }}</p>
      <p> Interested Framework: {{ topic }}</p>
    </div>
  </div>
</template>

<style>
form {
  width: 500px;
  background: white;
  text-align: left;
  border-radius: 10px;
  padding: 40px;
  align-items: flex-start;
}

label {
  color: #aaa;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  display: inline-block;
  margin-top: 10px;
}

input, select {
  display: block;
  width: 100%;
  color: #555;
  border: none;
  border-bottom: 1px solid #ddd;
  padding: 10px 2px;
  box-sizing: border-box;
  margin-bottom: 16px;
  outline: none;
}

input[type="checkbox"] {
  width: 16px;
  position: relative;
  display: inline-block;
  top: 2px;
  margin: 0 6px 0 0;
}

input.topic {
  margin-left: 10px;
}

.topic-container {
  justify-content: space-around;
  margin-bottom: 10px;
}

.skills {
  display: inline-block;
  background: #eee;
  border-radius: 16px;
  margin: 0 8px 8px 0;
  padding: 4px 18px;
  letter-spacing: 1px;
  cursor: pointer;
  color: #777;
  font-weight: bold;
  text-transform: uppercase;
}

button {
  background: #0b6dff;
  border: 0;
  color: white;
  margin-top: 20px;
  padding: 14px 30px;
  border-radius: 22px;
  font-weight: bold;
  letter-spacing: 1px;
}

.submit {
  text-align: center;
}

.error {
  color: red;
  font-style: italic;
  font-size: 0.8em;
}

.result {
  display: block;
  text-align: start;
  justify-content: center;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 16px;
}
</style>