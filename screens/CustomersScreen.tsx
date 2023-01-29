import {
	Text,
	SafeAreaView,
	ScrollView,
	ActivityIndicator,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useTailwind } from "tailwind-rn/dist";
import {
	CompositeNavigationProp,
	useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import { Image, Input } from "@rneui/themed";

export type CustomersScreenNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<TabStackParamList, "Customers">,
	NativeStackNavigationProp<RootStackParamList>
>;

const CustomerScreen = () => {
	const tw = useTailwind();
	const navigation = useNavigation();
	const [input, setInput] = useState<string>("");

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<ScrollView style={{ backgroundColor: "#59C1CC" }}>
			<Image
				source={require("../assets/delivery.jpg")}
				style={{
					width: "100%",
					height: undefined,
					aspectRatio: 1.5,
				}}
				PlaceholderContent={<ActivityIndicator />}
			/>

			<Input
				placeholder="Search by Customer"
				value={input}
        onChangeText={setInput}
        containerStyle={tw("bg-white pt-5 pb-0 px-10")}
			/>
		</ScrollView>
	);
};

export default CustomerScreen;
