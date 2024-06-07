<script setup>
import {onMounted, ref} from 'vue'
import db from './firebase/config.js'
import { collection, query, getDocs } from "firebase/firestore"

const todos = ref([])

const getTodos = async () => {
    const q = await getDocs(query(collection(db, 'todos')))
              q.forEach((doc)=> {
        todos.value.push(doc.data())
    })
}

onMounted(()=>{
    getTodos()
})
</script>

<template>
    
<div class="w-[400px] nx-auto">
    <h1 class="text-4x1 text-center">My Todo App</h1>

    <ul class="mt-4">
        <li v-for="todo in todos" class="border border-green-400 rounded shadow p-2 mb-3 bg-green-100 flex gap-2">
            <div class="border border-green-500 rounded-full w-[30px h-[30px] p-1 text-center bg-green-700 text-white">{{todo.priority}}</div>
            <span :class="{'line-through': todo.Done}" class="flex-2">{{ todo.Task }}</span>
            <div class="flex gap-1">
                <button class="border border-blue-700 bg-blue-700 px-2 rounded text-white">c</button>
                <button class="border border-red-700 bg-red-700 text-white rounded px-2">d</button>
            </div>
        </li>
    </ul>

</div> 

</template>