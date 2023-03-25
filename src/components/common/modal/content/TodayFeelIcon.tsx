import { Dispatch, ReactNode, SetStateAction } from 'react';
import styled from 'styled-components';

// COMPONENT feel icon
const TodayFeelIcon = ({ icon, name, width, height, todayFeel, setTodayFeel }: TodayFeelIconPropsType) => {
  return (
    <TodayFeel.Item onClick={() => setTodayFeel(name)}>
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
        <TodayFeelIcon icon={el.icon} name={el.name} width={el.width} height={el.height} todayFeel={todayFeel} setTodayFeel={setTodayFeel} />
      ))}
    </>
  );
};

// COMPONENT style
const TodayFeel = {
  Item: styled.li`
    display: flex;
    padding: 1rem 0;
    cursor: pointer;
  `,
  Button: styled.button`
    display: inline-block;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `,
  Icon: styled.div<{ width: string; height: string }>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  `,
  Text: styled.span`
    display: inline-block;
    margin-top: 0.2rem;
    color: ${({ theme }) => theme.color.text.text_10};
    ${({ theme }) => theme.font.sans.regular};
  `,
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
  setTodayFeel: Dispatch<SetStateAction<string | null>>;
}

interface TodayFeelIconContainerPropsType {
  list: TodayFeelIconBaseType[];
  todayFeel: string | null;
  setTodayFeel: Dispatch<SetStateAction<string | null>>;
}

export default TodayFeelIconContainer;
