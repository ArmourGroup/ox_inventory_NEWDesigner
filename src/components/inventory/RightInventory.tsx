import InventoryGridRight from './InventoryGridRight';
import { useAppSelector } from '../../store';
import { selectRightInventory } from '../../store/inventory';

const RightInventory: React.FC = () => {
  const rightInventory = useAppSelector(selectRightInventory);

  return <InventoryGridRight inventory={rightInventory} />;
};

export default RightInventory;
