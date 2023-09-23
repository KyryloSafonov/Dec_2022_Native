import {Routes} from './index';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type HomeParams = {[Routes.Home]: undefined};
export type UsersParams = {[Routes.Users]: undefined};
export type CurrentUserParams = {
  [Routes.CurrentUser]: {userId: string; title?: string; pageId?: string};
};

export type CurrentUserRouteProps<RouteName extends keyof CurrentUserParams> =
  RouteProp<CurrentUserParams, RouteName>;

export type UsersNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<UsersParams, Routes.Users>,
  NativeStackNavigationProp<CurrentUserParams, Routes.CurrentUser>
>;
