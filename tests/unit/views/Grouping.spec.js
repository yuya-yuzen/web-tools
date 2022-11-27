import { createLocalVue, shallowMount } from "@vue/test-utils";

import Grouping from "@/views/Grouping";

const localVue = createLocalVue();

describe("Grouping", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Grouping, { localVue });
  });

  describe("methods", () => {
    describe("divideIntoGroups", () => {
      const members = ["A", "B", "C"];

      it("3人を1つのグループに分ける", () => {
        const groupCount = 1;
        const groups = wrapper.vm.divideIntoGroups(members, groupCount);

        expect(groups[0]).toEqual(["A", "B", "C"]);
        expect(groups[1]).toEqual(undefined);
        expect(groups[2]).toEqual(undefined);
      });

      it("3人を2つのグループに分ける", () => {
        const groupCount = 2;
        const groups = wrapper.vm.divideIntoGroups(members, groupCount);

        expect(groups[0]).toEqual(["A"]);
        expect(groups[1]).toEqual(["B", "C"]);
        expect(groups[2]).toEqual(undefined);
      });

      it("3人を3つのグループに分ける", () => {
        const groupCount = 3;
        const groups = wrapper.vm.divideIntoGroups(members, groupCount);

        expect(groups[0]).toEqual(["A"]);
        expect(groups[1]).toEqual(["B"]);
        expect(groups[2]).toEqual(["C"]);
      });
    });
  });
});
