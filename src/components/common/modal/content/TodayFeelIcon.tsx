import { Dispatch, ReactNode, SetStateAction, useMemo } from 'react';
import styled from 'styled-components';

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

// COMPONENT style
const TodayFeel = {
  Item: styled.li`
    display: flex;
    padding: 1rem 0;
    cursor: pointer;
    position: relative;
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
  Cursor: styled.div`
    display: block;
    pointer-events: none;
    border: 0.2rem solid ${({ theme }) => theme.color.main.main};
    background: rgba(130, 145, 230, 0.1);
    border-radius: 0.5rem;
    width: 6.5rem;
    height: 7.6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
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
  setTodayFeel: Dispatch<SetStateAction<string>>;
}

interface TodayFeelIconContainerPropsType {
  list: TodayFeelIconBaseType[];
  todayFeel: string | null;
  setTodayFeel: Dispatch<SetStateAction<string>>;
}

export default TodayFeelIconContainer;
