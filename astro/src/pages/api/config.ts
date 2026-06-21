type Config = {
    id: string;
    name: string;
    craftingSpecalties: CraftingSpecalty[]
}

const config: Config = {
    id: "UFCMq6SdTg2FwJorYrSd7A",
    name: "yeehawlerz101",
    craftingSpecalties: ["Refining", "Armor"]
}
type CraftingSpecalty = "Tools" | "Weapons" | "Armor" | "Potions" | "Food" | "Refining"
export default config
