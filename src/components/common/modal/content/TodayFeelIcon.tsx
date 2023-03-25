import { Dispatch, ReactNode, SetStateAction } from 'react';

const TodayFeelIcon = ({ icon, name, width, height }: TodayFeelIconPropsType) => {
  console.log(name);
  return (
    <li onClick={() => console.log(name)}>
      <button>
        <div>{icon}</div>
        <span>{name}</span>
      </button>
    </li>
  );
};

const TodayFeelIconContainer = ({ list }: TodayFeelIconContainerPropsType) => {
  console.log(list);
  return (
    <>
      {list.map((el) => (
        <TodayFeelIcon icon={el.icon} name={el.name} width={el.width} height={el.height} />
      ))}
    </>
  );
};

// PARAM type
export interface TodayFeelIconPropsType {
  icon: ReactNode;
  name: string;
  width: string;
  height: string;
}

interface TodayFeelIconContainerPropsType {
  list: TodayFeelIconPropsType[];
  todayFeel: string | null;
  setTodayFeel: Dispatch<SetStateAction<string | null>>;
}

export default TodayFeelIconContainer;
