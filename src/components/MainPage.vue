<template>
    <div class="mainContainer">
        <div>
            <div>
                <label for="search">Search by first name and last name</label>
                <input id="search" type="text" v-model="searchMessage" @input="search"/>
            </div>

            <div class="margin--marging-top">
                <label for="select">Row count</label>
                <select id="select" v-model="perPageCount" @click="getUsers">
                    <option value="1000">All</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
        <div v-if="users.length !== 0" class="mainContainer mainContainer--content">
            <span v-for="user in users" :key="user.id" class="cursor" @click="userInfo(user)">{{user.first_name}}  {{user.last_name}}</span>
        </div>
        <div class="mainContainer mainContainer--row margin--marging-top">
            <paginate
                    v-model="page"
                    :page-count="pagination.total_pages"
                    :margin-pages="2"
                    :click-handler="getUsers"
                    :containerClass="'pagination'"
                    :active-class="'pagination--active'"
                    :disabled-class="'pagination--disable'"
                    :prev-text="'Prev'"
                    :next-text="'Next'"/>
        </div>
    </div>
</template>

<script>
    import {getUsers} from "@/api/mainApi";

    export default {
        name: "MainPage",
        data(){
            return {
                users: [],
                allUsers: [],
                perPageCount: 1000,
                page: 1,
                searchMessage: '',
                pagination: {
                    total: 0,
                    total_pages: 0
                }
            }
        },
        mounted() {
          this.getUsers();
        },
        methods: {
            getUsers(){
                let that = this;
                let params = {
                    page: that.page,
                    per_page: that.perPageCount
                };

                getUsers(params).then(response => {
                    that.pagination.total = response.data.total;
                    that.pagination.total_pages = response.data.total_pages;
                    that.users = response.data.data;

                    if(that.allUsers.length === 0){
                        that.allUsers = [...response.data.data];
                    }
                })
            },
             search(){
                let that = this;
                that.users = that.allUsers.filter(item =>
                    item.first_name.toLowerCase().includes(that.searchMessage.toLowerCase()) ||
                    item.last_name.toLowerCase().includes(that.searchMessage.toLowerCase())
                )
             },
            userInfo(user){
                this.$store.commit("SET_USER_INFO", user);
                this.$router.push({path: `/user/${user.id}/`});
            }
        }
    }
</script>

<style scoped>

</style>