<template>
    <div>
        Success
    </div>
</template>
<script>
export default {
    mounted() {
        setTimeout(() => {
            window.close()
        }, 1500);
    },
}
</script>