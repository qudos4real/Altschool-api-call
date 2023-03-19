<template>
    <div>
    <div class="repo-details">
        <h1>{{repo.name}}</h1>
        <p>
        {{ repo.description }}
        </p>
        <p>
            Language: {{ repo.language }}
        </p>
        <p>
            Created: {{ repo.created_at }}
        </p>
        <p>
            Last updated: {{ repo.updated_at }}
        </p>
        <p>
            <a :href="repo.html_url" target="_blank">View on Github</a>
        </p>
        <p v-if="loading">Loading...</p>
        <p v-if="error">{{error}}</p>
    </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'RepoDetails',
    data() {
        return {
            repo: {},
            loading: false,
            error: null,
        }
    },
    methods: {
        async fetchRepo() {
            this.loading = true
            try {
                const response = await axios.get(
                    `https://api.github.com/repos/Qudos4real/${this.$route.params.id}`,
                )
                this.repo = response.data

          
            } catch (error) {
                this.error = error.message
            } finally {
                this.loading = false
            }
        },
    },
    created() {
        this.fetchRepo()
    },
}
</script>

<style>

</style>