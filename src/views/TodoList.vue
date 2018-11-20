<template>
  <ion-page>
    <ion-header>

      <ion-toolbar class="toolbar-md-primary">
        <ion-title>TodoList</ion-title>
      </ion-toolbar>

    </ion-header>
    <ion-content class="content">

      <ion-list>
        <ion-item v-for="(todo,index) in todos" :key="index">
          <ion-label>12312312</ion-label>
        </ion-item>
      </ion-list>

      <ion-fab-button class="todo-fab" @click="addTodo">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  data () {
    return {
      todos: [{
        'id': 1,
        'name': 'Make awesome applications'
      },
      {
        'id': 2,
        'name': 'Play squash'
      },
      {
        'id': 3,
        'name': 'Deadlift'
      },
      {
        'id': 4,
        'name': 'Squat'
      }
      ]
    }
  },
  methods: {
    addTodo () {
      this.$router.push({
        path: '/todos/add'
      })
    }
  },
  created () {

  }
}
</script>