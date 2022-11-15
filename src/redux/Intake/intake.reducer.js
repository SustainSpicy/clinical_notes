import * as actionTypes from "./intake.types";
const INITIAL_STATE = {
  user: {
    username: "Timilehin",
    dob: "10 oct 1999",
    appointmentDate: "5 Feb 2022",
    duration: "20 minutes",
    start: "8:00 AM",
    end: "8:20 AM",
    clinicalNotes: {
      All: [
        {
          id: 0,
          title: "Primary Code",
          checked: true,
          path: "primarycode",
          option: {
            Constitutional: [
              {
                id: 1,
                title: "Chronic pain",
                checked: false,
              },
              {
                id: 2,
                title: "Loss of appetite",
                checked: false,
              },
            ],
          },
        },
        {
          id: 1,
          title: "Personal Present",
          checked: true,
          path: "personalpresent",
          option: {
            Constitutional: [
              {
                id: 1,
                title: "Chronic pain",
                checked: false,
              },
              {
                id: 2,
                title: "Loss of appetite",
                checked: false,
              },
              {
                id: 3,
                title: "Increase in appetite",
                checked: false,
              },
              {
                id: 4,
                title: "Unexplained Weight loss ",
                checked: false,
              },
              {
                id: 5,
                title: "Weight gain",
                checked: false,
              },
              {
                id: 6,
                title: "Weight gain",
                checked: false,
              },
              {
                id: 7,
                title: "Weight gain",
                checked: false,
              },
              {
                id: 8,
                title: "Weight gain",
                checked: false,
              },
              {
                id: 9,
                title: "Weight gain",
                checked: false,
              },
              {
                id: 10,
                title: "Weight gain",
                checked: false,
              },
              {
                id: 11,
                title: "Weight gain",
                checked: false,
              },
              {
                id: 12,
                title: "Weight gain",
                checked: false,
              },
              {
                id: 13,
                title: "Weight gain",
                checked: false,
              },
            ],
          },
        },
        {
          id: 2,
          title: "Chief complaint ",
          checked: false,
          path: "chiefcomplaint",
          options: {},
        },
        {
          id: 3,
          title: "History of present illness",
          checked: false,
          path: "historyofpresentillness",
          options: {},
        },
        {
          id: 4,
          title: "Stressors",
          checked: false,
          path: "stressors",
          options: {},
        },
        {
          id: 5,
          title: "Review of systems",
          checked: false,
          path: "reviewofsystems",
          options: {
            Constitutional: [
              {
                id: 1,
                title: "Chronic pain",
                checked: false,
              },
              {
                id: 2,
                title: "Loss of appetite",
                checked: false,
              },
              {
                id: 3,
                title: "Increase in appetite",
                checked: false,
              },
              {
                id: 4,
                title: "Unexplained Weight loss ",
                checked: false,
              },
              {
                id: 5,
                title: "Weight gain",
                checked: false,
              },
              {
                id: 6,
                title: "Weight loss",
                checked: false,
              },
            ],
            Eyes: [
              {
                id: 1,
                title: "Chronic pain",
                checked: false,
              },
              {
                id: 2,
                title: "Loss of appetite",
                checked: false,
              },
            ],
            "Ears,Nose,Mouth&Throat": [],
            Cardivascular: [],
            Respiratory: [],
            Musculoskeletal: [
              {
                id: 1,
                title: "Chronic pain",
                checked: false,
              },
              {
                id: 2,
                title: "Loss of appetite",
                checked: false,
              },
            ],
            Gastrointestinal: [],
          },
          other: "",
        },
        {
          id: 6,
          title: "Medication",
          checked: false,
          path: "medication",
          options: {},
        },
      ],
    },
  },
  provider: [
    {
      name: "Elisa May",
      img: "",
    },
  ],
  currentNote: null,
};

const intakeReducer = (state = INITIAL_STATE, action) => {
  let temp;

  switch (action.type) {
    case actionTypes.UPDATE_ONE_REVIEW_OPTIONS:
      temp = state.user.clinicalNotes.All.map((item) => {
        if (item.path === action.payload.tab) {
          item.options[action.payload.key].map((selectedItem) => {
            if (selectedItem.id === action.payload.itemID) {
              selectedItem.checked = !selectedItem.checked;
            }
            return selectedItem;
          });
          return item;
        } else {
          return item;
        }
      });

      return {
        ...state,
        user: {
          ...state.user,
          clinicalNotes: {
            ...state.user.clinicalNotes,
            All: [...temp],
          },
        },
      };

    case actionTypes.UPDATE_ONE_REVIEW_OTHER:
      temp = state.user.clinicalNotes.All.map((item) => {
        if (item.path === action.payload.tab) {
          item.other = action.payload.value;
        }
        return item;
      });
      return {
        ...state,
        user: {
          ...state.user,
          clinicalNotes: {
            ...state.user.clinicalNotes,
            All: [...temp],
          },
        },
      };

    case actionTypes.UPDATE_INTAKE_STATUS:
      temp = state.user.clinicalNotes.All.map((item) => {
        if (item.path === action.payload.tab) {
          item.checked = true;
        }
        return item;
      });

      return {
        ...state,
        user: {
          ...state.user,
          clinicalNotes: {
            ...state.user.clinicalNotes,
            All: [...temp],
          },
        },
      };

    default:
      return state;
  }
};

export default intakeReducer;
