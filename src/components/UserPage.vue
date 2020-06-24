<template>
    <div v-if="user.id !== ''" class="mainContainer">
        <bread-crumbs :name="user.first_name"/>
        <div class="mainContainer mainContainer--row">
            <span class="margin--marging-right">{{user.first_name}}</span>
            <span>{{user.last_name}}</span>
        </div>
        <span>{{user.email}}</span>
        <img class="width" :src="user.avatar"/>
    </div>
</template>

<script>
    import {getUser} from "@/api/mainApi";
    import BreadCrumbs from "@/components/BreadCrumbs";

    export default {
        name: "UserPage",
        components: {BreadCrumbs},
        data(){
            return {
                user: {
                    id: ''
                }
            }
        },
        mounted() {
            let that = this;
            that.user = that.$store.getters.getUserInfo;
            if(that.user.id === ''){
                getUser(that.$route.params.id).then(response => {
                    that.user = response.data.data;
                })
            }
        }
    }
</script>

<style scoped>

</style>