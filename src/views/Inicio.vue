<template>
  <main class="w-full min-h-screen">
    <div class="principalMenu w-full fixed bottom-0 h-12 bg-white flex">
      <div class="h-full  border-solid border-l-2 border-gray-600 text-center p-2">
        <svg class="w-8 h-8 text-verde-chillon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      </div>
      <div class="h-full  border-solid border-l-2 border-gray-600 text-center p-2">
        <svg class="w-8 h-8 text-teal-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      </div>
      
    </div>
  </main>
</template>

<script>
export default {

}
</script>
<style scoped>
main {
  background-color: #141414;
  color: #F4F4F4
}
.principalMenu {
  background: linear-gradient(180deg, #414344 0%, #2B2D2E 100%);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4), inset 0px 1px 0px rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}
</style>
