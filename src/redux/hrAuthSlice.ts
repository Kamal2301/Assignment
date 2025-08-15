const initialDataState = {
  data: {},
  isHrLogin: false,
  error: null,
};

export const hrAuthReducer = (state = initialDataState, action: any) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        isHrLogin: true,
        data: action.payload,
      };
    case 'HR_DATA_NOT_EXISTS':
      return {
        ...state,
        isHrLogin: false,
        data: null,
      };
    default:
      return state;
  }
  //   if (action.type === 'SET_DATA') {
  //     return {...state, data: action.payload};
  //   } else if (action.type === 'CLEAR_DATA') {
  //     return initialDataState;
  //   }
  //   return state;
};

export const setHrData = (hrData: any) => ({
  type: 'SET_DATA',
  payload: hrData,
});
export const HrDataNotExists = () => ({type: 'HR_DATA_NOT_EXISTS'});

export const selectHrData = (state: any) => state.hrAuth.data;
export const selectHrLogin = (state: any) => state.hrAuth.isHrLogin;
