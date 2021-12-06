import { FoodProps } from "../../pages/Dashboard/types";

export interface ModalEditFoodProps {
  setIsOpen: () => void
  handleUpdateFood: (food: FoodProps) => Promise<void>
  editingFood: {id: number}
  isOpen: boolean
}
