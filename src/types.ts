import {ParamListBase} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface RootStackParamList extends ParamListBase {
  Home: undefined;
  Media: undefined;
  PriceDetail: undefined;
  NewsDetail: undefined;
  DiseasesDetail: undefined;
}

export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
