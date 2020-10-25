<template>
    <div class="w-full">
        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-2 md:mx-3">
            <img class="" src="https://i.imgur.com/XJtP8b1.png" alt="Sunset in the mountains">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="tag">#photography</span>
                <span class="tag">#travel</span>
                <span class="tag">#winter</span>
            </div>
            <span> {{ dato.fecha }} </span>
        </div>
    </div>
</template>

<script>

export default {
    name:"Card",
    props:['dato'],


}
</script>