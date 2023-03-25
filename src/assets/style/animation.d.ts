type DirectionType = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';

interface BaseAniParamType {
  name: string;
  duration: string;
}

interface FadeInParamType extends BaseAniParamType {
  direction?: directionType;
  count?: string;
}
