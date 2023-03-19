<template>
    <h1>My github repositories</h1>
    <div class="wrapper" v-if="!loading">
        <div v-for="repo in repos" :key="repo.id">
            <router-link :to="{ name: 'Repo', params: { id: repo.name } }" class="repo">{{repo.name}}</router-link>
        </div>
    </div>
    <p v-if="loading">Loading...</p>
    <p v-if="error">{{error}}</p>
    <div class="btns">
    <button @click="prevPage" :disabled="page === 1">Prev</button>
    <button @click="nextPage" :disabled="repos.length < perPage">Next</button>
    </div>
</template>

<script>
import axios from 'axios'
import RepoDetails from '@/views/RepoDetails.vue'

export default {
name: 'FetchData',
components: {
    RepoDetails,
},
data() {
    return {
        repos: [],
        loading: false,
        error: null,
        page: 1,
        perPage: 6,
    }
},
methods: {
    async fetchRepos() {
        this.loading = true
        try {
            const response = await axios.get(
                `https://api.github.com/users/Qudos4real/repos?page=${this.page}&per_page=${this.perPage}`
            )
            this.repos = response.data
        } catch (error) {
            this.error = error.message
        } finally {
            this.loading = false
        }
    },
    nextPage() {
        this.page++
        this.fetchRepos()
    },
    prevPage() {
        this.page--
        this.fetchRepos()
    },

},
created() {
    this.fetchRepos()
},
}
</script>

<style>
.wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.wrapper > div {
    width: 30%;
    margin: 10px;
    padding: 50px;
    border: 1px solid #eee;
    border-radius: 5px;
    background-color: aquamarine;
}
.wrapper > div:hover {
    background-color: #eee;
    cursor: pointer;
}
.repo {
    text-decoration: none;
    color: #000;
    font-size: 20px;

}
.btns {
    margin: 20px;

}
.btns > button {
    margin: 15px;
    padding: 15px 50px;
    border: 1px solid #eee;
    border-radius: 5px;
    background-color: eee;
    cursor: pointer;
    font-size: 16px;

}
.btns > button:hover {
    background-color: aquamarine;
}
</style>