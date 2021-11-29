<template>
  <div class="hello">
    <div class="column">
      <p>Add task:
      <input v-model="message" placeholder="New task description" />
      <button class="badge badge-primary" v-on:click="add(message)">
        Addnew
      </button>
      </p>
    </div>
    <div class="column">
      <p>Edit:
      <input v-model="message" placeholder="New task description" />
      <button class="badge badge-primary" v-on:click="add(message)">
        Update
      </button>
      </p>
    </div>
    <button class="badge badge-primary mr-2" v-on:click="getAll()">
        Force Update
      </button>
    <table class="table">
      <thead>
        <tr>
          <th>Status</th>
          <th>Description</th>
          <th>Edit options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="x in taskList" :key="x">
          <td>{{ x.realizado }}</td>
          <td>{{ x.description }}</td>
          <td>
            <a href="#" v-on:click="pass" value="x.id">Edit </a>

            <a href="#" v-on:click="deletetask(x.id)" value="x.id">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      taskList: [],
    };
  },
  methods: {
    //Get all task from the RestApi
    getAll() {
      DataService.getAll()
        .then((response) => {
          this.taskList = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    //Instant change the "realizado" status
    switchdone(id, task) {
      DataService.update(id, task)
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    //Delete the task
    deletetask(id) {
      DataService.delete(id)
        .then((response) => {
          console.log(response.data);
          this.getAll();
        })
        .catch((e) => {
          console.log(e);
        });
      
    },
    
    add(message) {
      var newtask = {
      realizado: false,
      description: message,
    };
      DataService.create(newtask)
        .then((response) => {
          console.log(response.data);
          this.getAll();
        })
        .catch((e) => {
          console.log(e);
        });
      
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
