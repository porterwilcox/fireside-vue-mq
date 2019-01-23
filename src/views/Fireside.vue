<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-10 offset-1">
        <div class="card">
          <div class="card-header">
            <h3>Notes</h3>
            <img :height="$mq == 'sm' ? '40px' : '80px'" src="data:image/jpeg;base64,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" alt="" srcset="">
          </div>
          <div class="card-body">
            <ul class="list-group">
              <em
                @click="newNote.active = !newNote.active"
                class="clickable mb-2 w-fc"
              >{{newNote.active ? "Discard" : "Add a note"}}</em>
              <li v-if="newNote.active" :class="{'d-flex flex-column': $mq == 'sm'}" class="list-group-item d-flex justify-content-between align-items-center">
                <input v-model="newNote.title" placeholder="Title">
                <textarea v-model="newNote.content" placeholder="Content"></textarea>
                <i @click="addNote()" class="clickable far fa-save fa-lg text-success"></i>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(note, i) in notes" >
                <span v-if="edit != note._id">
                  <b class="mr-2">{{note.title || ''}}</b>
                  {{note.content}}
                </span>
                <span v-else>
                  Title:
                  <input v-model="note.title">
                  Content:
                  <textarea v-model="note.content"></textarea>
                </span>
                <span>
                  <i v-if="edit != note._id" @click="edit = note._id" class="clickable far fa-edit"></i>
                  <span v-else>
                    <i
                      @click="deleteNote(i)"
                      class="clickable far fa-trash-alt fa-lg ml-3 text-danger"
                    ></i>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "fireside",
  data() {
    return {
      edit: "",
      info: false,
      newNote: {
        active: false,
        title: "",
        content: ""
      },
      notes: []
    };
  },
  methods: {
    addNote() {
      this.notes.push(this.newNote);
      this.newNote = {
        active: false,
        title: "",
        content: ""
      };
    },
    deleteNote(i) {
        this.notes.splice(i, 1)
    }
  }
};
</script>

<style>

</style>
