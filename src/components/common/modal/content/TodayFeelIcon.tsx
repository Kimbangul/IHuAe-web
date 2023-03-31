import { Dispatch, ReactNode, SetStateAction, useMemo } from 'react';
import TodayFeel from './TodayFeelIconStyle';

// COMPONENT feel icon
const TodayFeelIcon = ({ icon, name, width, height, todayFeel, setTodayFeel }: TodayFeelIconPropsType) => {
  // PARAM 선택된 기분 표시
  const isSelected = useMemo(() => {
    if (name === todayFeel) return true;
  }, [todayFeel, name]);

  return (
    <TodayFeel.Item onClick={() => setTodayFeel(name)}>
      {isSelected && <TodayFeel.Cursor></TodayFeel.Cursor>}
      <TodayFeel.Button>
        <TodayFeel.Icon width={width} height={height}>
          {icon}
        </TodayFeel.Icon>
        <TodayFeel.Text>{name}</TodayFeel.Text>
      </TodayFeel.Button>
    </TodayFeel.Item>
  );
};

const TodayFeelIconContainer = ({ list, todayFeel, setTodayFeel }: TodayFeelIconContainerPropsType) => {
  return (
    <>
      {list.map((el) => (
        <TodayFeelIcon key={el.name} icon={el.icon} name={el.name} width={el.width} height={el.height} todayFeel={todayFeel} setTodayFeel={setTodayFeel} />
      ))}
    </>
  );
};


// PARAM type
export interface TodayFeelIconBaseType {
  icon: ReactNode;
  name: string;
  width: string;
  height: string;
}

interface TodayFeelIconPropsType extends TodayFeelIconBaseType {
  todayFeel: string | null;
  setTodayFeel: Dispatch<SetStateAction<string>>;
}

interface TodayFeelIconContainerPropsType {
  list: TodayFeelIconBaseType[];
  todayFeel: string | null;
  setTodayFeel: Dispatch<SetStateAction<string>>;
}

export default TodayFeelIconContainer;
