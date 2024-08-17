import InventoryGridLeft from './InventoryGridLeft';
import { useAppSelector } from '../../store';
import { selectLeftInventory } from '../../store/inventory';

const LeftInventory: React.FC = () => {
  const leftInventory = useAppSelector(selectLeftInventory);

  return <InventoryGridLeft inventory={leftInventory} />;
};

export default LeftInventory;
