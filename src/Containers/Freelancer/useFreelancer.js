const useFreelancer = ({navigation, route}) => {
  const data = route.params;
  const goBack = () => navigation.goBack('');
  const navChat = params => navigation.navigate('Chat', params);
  console.log('Freelancer', data);
  return {data, goBack, navChat};
};

export default useFreelancer;
