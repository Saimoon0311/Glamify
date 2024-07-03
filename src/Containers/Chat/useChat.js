const useChat = ({navigation, route}) => {
  const data = route.params;
  const goBack = () => navigation.goBack('');
  console.log('useChat', data);
  return {data, goBack};
};

export default useChat;
