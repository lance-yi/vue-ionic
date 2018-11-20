<template>
  <ion-page>
    <ion-header class="toolbar-md-primary">

      <ion-toolbar>
        <ion-title>Add Item</ion-title>
      </ion-toolbar>

    </ion-header>
    <ion-content class="content">

      <ion-item>
        <ion-input :value="vname" ref="newTodoItem" @input="updateTodoName" placeholder="Todo Name"></ion-input>
      </ion-item>

      <ion-fab-button class="todo-fab" @click.native="addTodo">
        <ion-icon name="checkmark"></ion-icon>
      </ion-fab-button>

    </ion-content>
  </ion-page>
</template>

<script>
export default {
  data () {
    return {
      vname: 'add'
    }
  },
  methods: {
    addTodo () {
      const newTodo = { name: this.vname }
      // 如何使用axios
      // this.$http.post(this.$interface.getUserInfo, newTodo, res => {
      //   this.$router.push({path: '/todos'})
      // })
      this.$router.push({ path: '/todos' })
    },
    updateTodoName () {
      this.vname = this.$refs.newTodoItem.value
    }
  }
}
</script>