<template>
  <div class="hello">
    <button class="badge badge-primary mr-2" @click="getAll()">
      Force Update
    </button>
    <table class="table">
      <thead>
        <tr>
          <th>Internal Id</th>
          <th>Status</th>
          <th>Description</th>
          <th>Edit options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="x in taskList" :key="x">
          <td>{{ x.id }}</td>
        <td>{{ x.realizado }}</td>
        <td>{{ x.description }}</td>
        <td> <a href="#" @click="pass">Edit </a>
        <a href="#" @click="pass">Delete</a></td>
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
      //Aqui manipular otro arreglo para crear la vista dinamica
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
    delete(id) {
      DataService.delete(id)
        .then((response) => {
          console.log(response.data);
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
