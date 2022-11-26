<template>
  <div id="app">
    <h1>
      <router-link :to="{ name: 'Top' }">yuya-yuzen-web-tools</router-link>
    </h1>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'Grouping' }">グループ分け</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Roulette' }">ルーレット</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style></style>
