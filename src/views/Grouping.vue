<template>
  <div>
    <h2>グループ分け</h2>
    <textarea
      v-model="members"
      @change="setLocalStorage"
      placeholder="改行区切りで名前を入力"
      rows="10"
      cols="20"
    ></textarea>
    <br />
    <span>グループ数：</span>
    <select v-model="groupCount">
      <option v-for="number in 10" :key="number" :value="number">
        {{ number }}
      </option>
    </select>
    <br />
    <button value="button" @click="makeGroups">実行！</button>
    <template v-if="groups">
      <div v-for="(group, groupIndex) in groups" :key="groupIndex">
        <h3>グループ{{ groupIndex + 1 }}</h3>
        <ul>
          <li v-for="(member, memberIndex) in group" :key="memberIndex">
            {{ member }}
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Grouping",
  data() {
    return {
      members: "",
      groupCount: 1,
      groups: [],
    };
  },
  created() {
    this.getLocalStorage();
  },
  methods: {
    getLocalStorage() {
      const members = localStorage.getItem("yuya-yuzen-web-tools-grouping");
      if (members) this.members = members;
    },
    setLocalStorage() {
      localStorage.setItem("yuya-yuzen-web-tools-grouping", this.members);
    },
    makeGroups() {
      if (!this.members) {
        alert("名前を入力してください");
        return;
      }

      const shuffledMembers = this.shuffle(this.members.split(/\n/));
      if (shuffledMembers.length < this.groupCount) {
        alert("グループ数は人数以下にしてください");
        return;
      }

      this.groups = this.divideIntoGroups(shuffledMembers, this.groupCount);
    },
    shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    },
    divideIntoGroups(members, groupCount) {
      const groupMemberCount = members.length / groupCount;

      let groups = [];
      let start = 0;
      let count = groupMemberCount;
      [...Array(groupCount)].forEach(() => {
        groups.push(members.slice(start, count));
        start += groupMemberCount;
        count += groupMemberCount;
      });

      return groups;
    },
  },
};
</script>
