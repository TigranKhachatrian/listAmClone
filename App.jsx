import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CarContext from './contexts/carContext/context.js';


import HomeScreen from './components/View/HomeScreen/index.js';
import DetailScreen from './components/View/DetailScreen/index'

const Stack = createNativeStackNavigator();

function App() {


  const sellItemData = [
    {
      id:0,
      url:'https://reactnative.dev/img/tiny_logo.png',
      desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy 
      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
      only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
      containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum `,
      price:28950,
      header:"BMW 3 Series e46 2.5 engine"

    },

    {
      id:1,
      url:'https://reactnative.dev/img/tiny_logo.png',
      desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy 
      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
      only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
      containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum `,
      price:2800,
      status:'Դիլեր',
      header:"BMW 3 Series e46 2.5 engine"

    },

    {
      id:2,
      url:'https://reactnative.dev/img/tiny_logo.png',
      desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy 
      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
      only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
      containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum `,
      price:2900,
      header:"BMW 3 Series e46 2.5 engine"

    },

    {
      id:3,
      url:'https://reactnative.dev/img/tiny_logo.png',
      desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy 
      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
      only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
      containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum `,
      price:2890,
      header:"BMW 3 Series e46 2.5 engine"


    },
    {
      id:4,
      url:'https://reactnative.dev/img/tiny_logo.png',
      desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy 
      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
      only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
      containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum `,
      price:2890,
      status:'Շտապ',

      header:"BMW 3 Series e46 2.5 engine"


    },
    {
      id:5,
      url:'https://reactnative.dev/img/tiny_logo.png',
      desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy 
      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
      only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
      containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum `,
      price:2890,
      header:"BMW 3 Series e46 2.5 engine"


    },
    {
      id:6,
      url:'https://reactnative.dev/img/tiny_logo.png',
      desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy 
      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
      only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
      containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum `,
      price:2890,
      header:"BMW 3 Series e46 2.5 engine"


    },
    {
      id:7,
      url:'https://reactnative.dev/img/tiny_logo.png',
      desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy 
      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
      only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
      containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum `,
      price:2890,
      header:"BMW 3 Series e46 2.5 engine"


    },
    {
      id:8,
      url:'https://reactnative.dev/img/tiny_logo.png',
      desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy 
      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
      only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
      containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum `,
      price:2890,
      header:"BMW 3 Series e46 2.5 engine"


    },
  ]

  return (
    <CarContext.Provider value={sellItemData}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CarContext.Provider>
   
  )
}


export default App;

   