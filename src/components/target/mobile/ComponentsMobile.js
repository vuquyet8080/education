import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TargetItem from "../BE/TargetItem";
import TargetItemLink from "../TargetItemLink";

export default function ComponentsMobile() {
  return (
    <AccordionItem value="Components">
      <AccordionTrigger className="pl-2 text-gray-900">
        React Native Components & Navigation
      </AccordionTrigger>
      <AccordionContent className="pl-6 text-gray-500">
        Các Component cơ bản cần nắm rõ để xây dựng giao diện (View, Text,
        Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList,
        SectionList, Modal, Switch, TouchableHighlight, ActivityIndicator ...)
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Cài đặt và Kết nối React Navigation
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Các loại Navigator: StackNavigator, TabNavigator, DrawerNavigator, và
        BottomTabNavigator
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Điều Hướng Cơ Bản: sử dụng navigate, push, pop, goBack, và replace để
        chuyển đổi giữa các màn hình.
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Tùy Chỉnh: sử dụng các thuộc tính như options, screenOptions, và
        headerStyle.
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Truyền Tham Số giữa các Màn Hình: sử dụng route.params
      </AccordionContent>

      <AccordionContent className="pl-6 text-gray-500">
        Xử Lý Sự Kiện Điều Hướng: navigation.addListener
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Các Hook và Sử Dụng Functional Component: useNavigation, useRoute
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Xử lý quyền truy cập (authentication), bảo mật và kiểm tra điều kiện
        trước khi điều hướng.
      </AccordionContent>

      <AccordionContent className="pl-6 text-gray-500">
        <p className="mb-3 text-xl font-bold text-zinc-700 dark:text-indigo-600">
          Target
        </p>
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        <TargetItemLink
          link={
            "https://www.figma.com/file/sVFeLC0sVlJ1Kqb6bJVPJ2/E-commerce-Application-by-Fively-%2F-Dark-version-(Copy)?type=design&node-id=28%3A9&mode=design&t=zyyJ0NUoPcaDneXP-1"
          }
          title={
            "Áp dụng kiến thức về Component, CSS và Navigation, hoàn thiện UI"
          }
        />
      </AccordionContent>
    </AccordionItem>
  );
}
