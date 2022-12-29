export const data = {
  "1": {
    id: "1",
    title: "Game one",
    description: [
      "It had been a simple realization that had changed Debra's life perspective. It was really so simple that she was embarrassed that she had lived the previous five years with the way she measured her worth. Now that she saw what she had been doing, she could see how sad it was. That made her all the more relieved she had made the change. The number of hearts her Instagram posts received wasn't any longer the indication of her own self-worth.",
      "The thing that's great about this job is the time sourcing the items involves no traveling. I just look online to buy it. It's really as simple as that. While everyone else is searching for what they can sell, I sit in front of my computer and buy better stuff for less money and spend a fraction of the time doing it.",
      "Sarah watched the whirlpool mesmerized. She couldn't take her eyes off the water swirling around and around. She stuck in small twigs and leaves to watch the whirlpool catch them and then suck them down. It bothered her more than a little bit that this could also be used as a metaphor for her life.",
    ],
    gameMechanic: {
      type: "keyword_predefined",
      configuration: { headline: "Click da button!", label: "Click click!" },
    },
  },
  "2": {
    id: "2",
    title: "Game two",
    description: [
      "The cab arrived late. The inside was in as bad of shape as the outside which was concerning, and it didn't appear that it had been cleaned in months. The green tree air-freshener hanging from the rearview mirror was either exhausted of its scent or not strong enough to overcome the other odors emitting from the cab. The correct decision, in this case, was to get the hell out of it and to call another cab, but she was late and didn't have a choice.",
      "The thing that's great about this job is the time sourcing the items involves no traveling. I just look online to buy it. It's really as simple as that. While everyone else is searching for what they can sell, I sit in front of my computer and buy better stuff for less money and spend a fraction of the time doing it.",
    ],
    gameMechanic: {
      type: "keyword_input",
      configuration: {
        headline: "What is the capitol of Szczecin?",
        label: "Don't click",
      },
    },
  },
  "3": {
    id: "3",
    title: "Game three",
    description: [
      "She looked at her little girl who was about to become a teen. She tried to think back to when the girl had been younger but failed to pinpoint the exact moment when she had become a little too big to pick up and carry. It hit her all at once. She was no longer a little girl and she stood there speechless with fear, sadness, and pride all running through her at the same time.",
    ],
    gameMechanic: {
      type: "ab",
      configuration: {
        headline: "Choose wisely",
        label: "AB Click",
        answers: [
          { label: "One", value: "one" },
          { label: "Two", value: "two" },
          { label: "Three", value: "three" },
          { label: "Four", value: "four" },
        ],
        correctAnswer: "one",
      },
    },
  },
};
