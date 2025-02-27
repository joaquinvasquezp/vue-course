<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" another-prop="..."></slot> <!-- props on slots, accesable in the component where you pass data to the slot -->
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ['Finish the course', 'Learn Vue'],
        }
    }
}
</script>