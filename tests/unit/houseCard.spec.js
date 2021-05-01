import { shallowMount } from "@vue/test-utils";
import charactersArray from "./charactersArray";
import HouseCard from "@/components/HouseCard.vue";

describe("HouseCard.vue", () => {
  it("renders props.house when passed", () => {
    const house = { id: 1, name: "Gryffindor", characters: charactersArray };
    const wrapper = shallowMount(HouseCard, {
      propsData: { house },
    });
    // Testing name of house
    expect(wrapper.text()).toMatch(house.name);

    // Testing computed properties
    expect(wrapper.text()).toContain(charactersArray.length);
    expect(wrapper.text()).toContain(charactersArray.length);
  });
});
