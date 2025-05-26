// Please use event listeners to run functions.
document.addEventListener('onLoad', function (obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});

// How to automatically get emoji JSON from the YouTube website:
/*
    // Implement below in HTML/Console
    const emots = document.querySelectorAll('[aria-label]');
    const result = [];
    emots.forEach(emot => {
        const text = emot.getAttribute('aria-label');
        const url = emot.getAttribute('src');
        if (url !== null) {
            const urlObj = new URL(url);
            if (urlObj.hostname === 'yt3.ggpht.com') { // yt3.ggpht.com stores YouTube default emojis
                result.push({ text: text, url: url });
            }
        }
    });
    console.log(JSON.stringify(result, null, 2)); // the result will be printed in the console
*/

//semua emoji Wazu dan semua emoji default Youtube
const emot = [
  {
    "text": ":hand-pink-waving:",
    "url": "https://yt3.ggpht.com/KOxdr_z3A5h1Gb7kqnxqOCnbZrBmxI2B_tRQ453BhTWUhYAlpg5ZP8IKEBkcvRoY8grY91Q=w24-h24-c-k-nd"
  },
  {
    "text": ":face-blue-smiling:",
    "url": "https://yt3.ggpht.com/cktIaPxFwnrPwn-alHvnvedHLUJwbHi8HCK3AgbHpphrMAW99qw0bDfxuZagSY5ieE9BBrA=w24-h24-c-k-nd"
  },
  {
    "text": ":face-red-droopy-eyes:",
    "url": "https://yt3.ggpht.com/oih9s26MOYPWC_uL6tgaeOlXSGBv8MMoDrWzBt-80nEiVSL9nClgnuzUAKqkU9_TWygF6CI=w24-h24-c-k-nd"
  },
  {
    "text": ":face-purple-crying:",
    "url": "https://yt3.ggpht.com/g6_km98AfdHbN43gvEuNdZ2I07MmzVpArLwEvNBwwPqpZYzszqhRzU_DXALl11TchX5_xFE=w24-h24-c-k-nd"
  },
  {
    "text": ":text-green-game-over:",
    "url": "https://yt3.ggpht.com/cr36FHhSiMAJUSpO9XzjbOgxhtrdJNTVJUlMJeOOfLOFzKleAKT2SEkZwbqihBqfTXYCIg=w24-h24-c-k-nd"
  },
  {
    "text": ":person-turqouise-waving:",
    "url": "https://yt3.ggpht.com/uNSzQ2M106OC1L3VGzrOsGNjopboOv-m1bnZKFGuh0DxcceSpYHhYbuyggcgnYyaF3o-AQ=w24-h24-c-k-nd"
  },
  {
    "text": ":face-green-smiling:",
    "url": "https://yt3.ggpht.com/G061SAfXg2bmG1ZXbJsJzQJpN8qEf_W3f5cb5nwzBYIV58IpPf6H90lElDl85iti3HgoL3o=w24-h24-c-k-nd"
  },
  {
    "text": ":face-orange-frowning:",
    "url": "https://yt3.ggpht.com/Ar8jaEIxzfiyYmB7ejDOHba2kUMdR37MHn_R39mtxqO5CD4aYGvjDFL22DW_Cka6LKzhGDk=w24-h24-c-k-nd"
  },
  {
    "text": ":eyes-purple-crying:",
    "url": "https://yt3.ggpht.com/FrYgdeZPpvXs-6Mp305ZiimWJ0wV5bcVZctaUy80mnIdwe-P8HRGYAm0OyBtVx8EB9_Dxkc=w24-h24-c-k-nd"
  },
  {
    "text": ":face-fuchsia-wide-eyes:",
    "url": "https://yt3.ggpht.com/zdcOC1SMmyXJOAddl9DYeEFN9YYcn5mHemJCdRFQMtDuS0V-IyE-5YjNUL1tduX1zs17tQ=w24-h24-c-k-nd"
  },
  {
    "text": ":cat-orange-whistling:",
    "url": "https://yt3.ggpht.com/0ocqEmuhrKCK87_J21lBkvjW70wRGC32-Buwk6TP4352CgcNjL6ug8zcsel6JiPbE58xhq5g=w24-h24-c-k-nd"
  },
  {
    "text": ":face-blue-wide-eyes:",
    "url": "https://yt3.ggpht.com/2Ht4KImoWDlCddiDQVuzSJwpEb59nZJ576ckfaMh57oqz2pUkkgVTXV8osqUOgFHZdUISJM=w24-h24-c-k-nd"
  },
  {
    "text": ":face-orange-raised-eyebrow:",
    "url": "https://yt3.ggpht.com/JbCfmOgYI-mO17LPw8e_ycqbBGESL8AVP6i7ZsBOVLd3PEpgrfEuJ9rEGpP_unDcqgWSCg=w24-h24-c-k-nd"
  },
  {
    "text": ":face-fuchsia-tongue-out:",
    "url": "https://yt3.ggpht.com/EURfJZi_heNulV3mfHzXBk8PIs9XmZ9lOOYi5za6wFMCGrps4i2BJX9j-H2gK6LIhW6h7sY=w24-h24-c-k-nd"
  },
  {
    "text": ":face-orange-biting-nails:",
    "url": "https://yt3.ggpht.com/HmsXEgqUogkQOnL5LP_FdPit9Z909RJxby-uYcPxBLNhaPyqPTcGwvGaGPk2hzB_cC0hs_pV=w24-h24-c-k-nd"
  },
  {
    "text": ":face-red-heart-shape:",
    "url": "https://yt3.ggpht.com/I0Mem9dU_IZ4a9cQPzR0pUJ8bH-882Eg0sDQjBmPcHA6Oq0uXOZcsjPvPbtormx91Ha2eRA=w24-h24-c-k-nd"
  },
  {
    "text": ":face-fuchsia-poop-shape:",
    "url": "https://yt3.ggpht.com/_xlyzvSimqMzhdhODyqUBLXIGA6F_d5en2bq-AIfc6fc3M7tw2jucuXRIo5igcW3g9VVe3A=w24-h24-c-k-nd"
  },
  {
    "text": ":face-purple-wide-eyes:",
    "url": "https://yt3.ggpht.com/5RDrtjmzRQKuVYE_FKPUHiGh7TNtX5eSNe6XzcSytMsHirXYKunxpyAsVacTFMg0jmUGhQ=w24-h24-c-k-nd"
  },
  {
    "text": ":glasses-purple-yellow-diamond:",
    "url": "https://yt3.ggpht.com/EnDBiuksboKsLkxp_CqMWlTcZtlL77QBkbjz_rLedMSDzrHmy_6k44YWFy2rk4I0LG6K2KI=w24-h24-c-k-nd"
  },
  {
    "text": ":face-pink-tears:",
    "url": "https://yt3.ggpht.com/RL5QHCNcO_Mc98SxFEblXZt9FNoh3bIgsjm0Kj8kmeQJWMeTu7JX_NpICJ6KKwKT0oVHhAA=w24-h24-c-k-nd"
  },
  {
    "text": ":body-blue-raised-arms:",
    "url": "https://yt3.ggpht.com/2Jds3I9UKOfgjid97b_nlDU4X2t5MgjTof8yseCp7M-6ZhOhRkPGSPfYwmE9HjCibsfA1Uzo=w24-h24-c-k-nd"
  },
  {
    "text": ":hand-orange-covering-eyes:",
    "url": "https://yt3.ggpht.com/y8ppa6GcJoRUdw7GwmjDmTAnSkeIkUptZMVQuFmFaTlF_CVIL7YP7hH7hd0TJbd8p9w67IM=w24-h24-c-k-nd"
  },
  {
    "text": ":trophy-yellow-smiling:",
    "url": "https://yt3.ggpht.com/7tf3A_D48gBg9g2N0Rm6HWs2aqzshHU4CuVubTXVxh1BP7YDBRC6pLBoC-ibvr-zCl_Lgg=w24-h24-c-k-nd"
  },
  {
    "text": ":eyes-pink-heart-shape:",
    "url": "https://yt3.ggpht.com/5vzlCQfQQdzsG7nlQzD8eNjtyLlnATwFwGvrMpC8dgLcosNhWLXu8NN9qIS3HZjJYd872dM=w24-h24-c-k-nd"
  },
  {
    "text": ":face-turquoise-covering-eyes:",
    "url": "https://yt3.ggpht.com/H2HNPRO8f4SjMmPNh5fl10okSETW7dLTZtuE4jh9D6pSmaUiLfoZJ2oiY-qWU3Owfm1IsXg=w24-h24-c-k-nd"
  },
  {
    "text": ":hand-green-crystal-ball:",
    "url": "https://yt3.ggpht.com/qZfJrWDEmR03FIak7PMNRNpMjNsCnOzD9PqK8mOpAp4Kacn_uXRNJNb99tE_1uyEbvgJReF2=w24-h24-c-k-nd"
  },
  {
    "text": ":face-turquoise-drinking-coffee:",
    "url": "https://yt3.ggpht.com/myqoI1MgFUXQr5fuWTC9mz0BCfgf3F8GSDp06o1G7w6pTz48lwARjdG8vj0vMxADvbwA1dA=w24-h24-c-k-nd"
  },
  {
    "text": ":body-green-covering-eyes:",
    "url": "https://yt3.ggpht.com/UR8ydcU3gz360bzDsprB6d1klFSQyVzgn-Fkgu13dIKPj3iS8OtG1bhBUXPdj9pMwtM00ro=w24-h24-c-k-nd"
  },
  {
    "text": ":goat-turquoise-white-horns:",
    "url": "https://yt3.ggpht.com/jMnX4lu5GnjBRgiPtX5FwFmEyKTlWFrr5voz-Auko35oP0t3-zhPxR3PQMYa-7KhDeDtrv4=w24-h24-c-k-nd"
  },
  {
    "text": ":hand-purple-blue-peace:",
    "url": "https://yt3.ggpht.com/-sC8wj6pThd7FNdslEoJlG4nB9SIbrJG3CRGh7-bNV0RVfcrJuwiWHoUZ6UmcVs7sQjxTg4=w24-h24-c-k-nd"
  },
  {
    "text": ":face-blue-question-mark:",
    "url": "https://yt3.ggpht.com/Wx4PMqTwG3f4gtR7J9Go1s8uozzByGWLSXHzrh3166ixaYRinkH_F05lslfsRUsKRvHXrDk=w24-h24-c-k-nd"
  },
  {
    "text": ":face-blue-covering-eyes:",
    "url": "https://yt3.ggpht.com/kj3IgbbR6u-mifDkBNWVcdOXC-ut-tiFbDpBMGVeW79c2c54n5vI-HNYCOC6XZ9Bzgupc10=w24-h24-c-k-nd"
  },
  {
    "text": ":face-purple-smiling-fangs:",
    "url": "https://yt3.ggpht.com/k1vqi6xoHakGUfa0XuZYWHOv035807ARP-ZLwFmA-_NxENJMxsisb-kUgkSr96fj5baBOZE=w24-h24-c-k-nd"
  },
  {
    "text": ":face-purple-sweating:",
    "url": "https://yt3.ggpht.com/tRnrCQtEKlTM9YLPo0vaxq9mDvlT0mhDld2KI7e_nDRbhta3ULKSoPVHZ1-bNlzQRANmH90=w24-h24-c-k-nd"
  },
  {
    "text": ":face-purple-smiling-tears:",
    "url": "https://yt3.ggpht.com/MJV1k3J5s0hcUfuo78Y6MKi-apDY5NVDjO9Q7hL8fU4i0cIBgU-cU4rq4sHessJuvuGpDOjJ=w24-h24-c-k-nd"
  },
  {
    "text": ":face-blue-star-eyes:",
    "url": "https://yt3.ggpht.com/m_ANavMhp6cQ1HzX0HCTgp_er_yO2UA28JPbi-0HElQgnQ4_q5RUhgwueTpH-st8L3MyTA=w24-h24-c-k-nd"
  },
  {
    "text": ":face-blue-heart-eyes:",
    "url": "https://yt3.ggpht.com/M9tzKd64_r3hvgpTSgca7K3eBlGuyiqdzzhYPp7ullFAHMgeFoNLA0uQ1dGxj3fXgfcHW4w=w24-h24-c-k-nd"
  },
  {
    "text": ":face-blue-three-eyes:",
    "url": "https://yt3.ggpht.com/nSQHitVplLe5uZC404dyAwv1f58S3PN-U_799fvFzq-6b3bv-MwENO-Zs1qQI4oEXCbOJg=w24-h24-c-k-nd"
  },
  {
    "text": ":face-blue-droopy-eyes:",
    "url": "https://yt3.ggpht.com/hGPqMUCiXGt6zuX4dHy0HRZtQ-vZmOY8FM7NOHrJTta3UEJksBKjOcoE6ZUAW9sz7gIF_nk=w24-h24-c-k-nd"
  },
  {
    "text": ":planet-orange-purple-ring:",
    "url": "https://yt3.ggpht.com/xkaLigm3P4_1g4X1JOtkymcC7snuJu_C5YwIFAyQlAXK093X0IUjaSTinMTLKeRZ6280jXg=w24-h24-c-k-nd"
  },
  {
    "text": ":face-turquoise-speaker-shape:",
    "url": "https://yt3.ggpht.com/WTFFqm70DuMxSC6ezQ5Zs45GaWD85Xwrd9Sullxt54vErPUKb_o0NJQ4kna5m7rvjbRMgr3A=w24-h24-c-k-nd"
  },
  {
    "text": ":octopus-red-waving:",
    "url": "https://yt3.ggpht.com/L9Wo5tLT_lRQX36iZO_fJqLJR4U74J77tJ6Dg-QmPmSC_zhVQ-NodMRc9T0ozwvRXRaT43o=w24-h24-c-k-nd"
  },
  {
    "text": ":pillow-turquoise-hot-chocolate:",
    "url": "https://yt3.ggpht.com/cAR4cehRxbn6dPbxKIb-7ShDdWnMxbaBqy2CXzBW4aRL3IqXs3rxG0UdS7IU71OEU7LSd20q=w24-h24-c-k-nd"
  },
  {
    "text": ":hourglass-purple-sand-orange:",
    "url": "https://yt3.ggpht.com/MFDLjasPt5cuSM_tK5Fnjaz_k08lKHdX_Mf7JkI6awaHriC3rGL7J_wHxyG6PPhJ8CJ6vsQ=w24-h24-c-k-nd"
  },
  {
    "text": ":fish-orange-wide-eyes:",
    "url": "https://yt3.ggpht.com/iQLKgKs7qL3091VHgVgpaezc62uPewy50G_DoI0dMtVGmQEX5pflZrUxWfYGmRfzfUOOgJs=w24-h24-c-k-nd"
  },
  {
    "text": ":popcorn-yellow-striped-smile:",
    "url": "https://yt3.ggpht.com/TW_GktV5uVYviPDtkCRCKRDrGlUc3sJ5OHO81uqdMaaHrIQ5-sXXwJfDI3FKPyv4xtGpOlg=w24-h24-c-k-nd"
  },
  {
    "text": ":penguin-blue-waving-tear:",
    "url": "https://yt3.ggpht.com/p2u7dcfZau4_bMOMtN7Ma8mjHX_43jOjDwITf4U9adT44I-y-PT7ddwPKkfbW6Wx02BTpNoC=w24-h24-c-k-nd"
  },
  {
    "text": ":clock-turquoise-looking-up:",
    "url": "https://yt3.ggpht.com/tDnDkDZykkJTrsWEJPlRF30rmbek2wcDcAIymruOvSLTsUFIZHoAiYTRe9OtO-80lDfFGvo=w24-h24-c-k-nd"
  },
  {
    "text": ":face-red-smiling-live:",
    "url": "https://yt3.ggpht.com/14Pb--7rVcqnHvM7UlrYnV9Rm4J-uojX1B1kiXYvv1my-eyu77pIoPR5sH28-eNIFyLaQHs=w24-h24-c-k-nd"
  },
  {
    "text": ":hands-yellow-heart-red:",
    "url": "https://yt3.ggpht.com/qWSu2zrgOKLKgt_E-XUP9e30aydT5aF3TnNjvfBL55cTu1clP8Eoh5exN3NDPEVPYmasmoA=w24-h24-c-k-nd"
  },
  {
    "text": ":volcano-green-lava-orange:",
    "url": "https://yt3.ggpht.com/_IWOdMxapt6IBY5Cb6LFVkA3J77dGQ7P2fuvYYv1-ahigpVfBvkubOuGLSCyFJ7jvis-X8I=w24-h24-c-k-nd"
  },
  {
    "text": ":person-turquoise-waving-speech:",
    "url": "https://yt3.ggpht.com/gafhCE49PH_9q-PuigZaDdU6zOKD6grfwEh1MM7fYVs7smAS_yhYCBipq8gEiW73E0apKTzi=w24-h24-c-k-nd"
  },
  {
    "text": ":face-orange-tv-shape:",
    "url": "https://yt3.ggpht.com/EVK0ik6dL5mngojX9I9Juw4iFh053emP0wcUjZH0whC_LabPq-DZxN4Jg-tpMcEVfJ0QpcJ4=w24-h24-c-k-nd"
  },
  {
    "text": ":face-blue-spam-shape:",
    "url": "https://yt3.ggpht.com/hpwvR5UgJtf0bGkUf8Rn-jTlD6DYZ8FPOFY7rhZZL-JHj_7OPDr7XUOesilRPxlf-aW42Zg=w24-h24-c-k-nd"
  },
  {
    "text": ":face-fuchsia-flower-shape:",
    "url": "https://yt3.ggpht.com/o9kq4LQ0fE_x8yxj29ZeLFZiUFpHpL_k2OivHbjZbttzgQytU49Y8-VRhkOP18jgH1dQNSVz=w24-h24-c-k-nd"
  },
  {
    "text": ":person-blue-holding-pencil:",
    "url": "https://yt3.ggpht.com/TKgph5IHIHL-A3fgkrGzmiNXzxJkibB4QWRcf_kcjIofhwcUK_pWGUFC4xPXoimmne3h8eQ=w24-h24-c-k-nd"
  },
  {
    "text": ":body-turquoise-yoga-pose:",
    "url": "https://yt3.ggpht.com/GW3otW7CmWpuayb7Ddo0ux5c-OvmPZ2K3vaytJi8bHFjcn-ulT8vcHMNcqVqMp1j2lit2Vw=w24-h24-c-k-nd"
  },
  {
    "text": ":location-yellow-teal-bars:",
    "url": "https://yt3.ggpht.com/YgeWJsRspSlAp3BIS5HMmwtpWtMi8DqLg9fH7DwUZaf5kG4yABfE1mObAvjCh0xKX_HoIR23=w24-h24-c-k-nd"
  },
  {
    "text": ":person-turquoise-writing-headphones:",
    "url": "https://yt3.ggpht.com/DC4KrwzNkVxLZa2_KbKyjZTUyB9oIvH5JuEWAshsMv9Ctz4lEUVK0yX5PaMsTK3gGS-r9w=w24-h24-c-k-nd"
  },
  {
    "text": ":person-turquoise-wizard-wand:",
    "url": "https://yt3.ggpht.com/OiZeNvmELg2PQKbT5UCS0xbmsGbqRBSbaRVSsKnRS9gvJPw7AzPp-3ysVffHFbSMqlWKeQ=w24-h24-c-k-nd"
  },
  {
    "text": ":person-blue-eating-spaghetti:",
    "url": "https://yt3.ggpht.com/AXZ8POmCHoxXuBaRxX6-xlT5M-nJZmO1AeUNo0t4o7xxT2Da2oGy347sHpMM8shtUs7Xxh0=w24-h24-c-k-nd"
  },
  {
    "text": ":face-turquoise-music-note:",
    "url": "https://yt3.ggpht.com/-K6oRITFKVU8V4FedrqXGkV_vTqUufVCQpBpyLK6w3chF4AS1kzT0JVfJxhtlfIAw5jrNco=w24-h24-c-k-nd"
  },
  {
    "text": ":person-pink-swaying-hair:",
    "url": "https://yt3.ggpht.com/L8cwo8hEoVhB1k1TopQaeR7oPTn7Ypn5IOae5NACgQT0E9PNYkmuENzVqS7dk2bYRthNAkQ=w24-h24-c-k-nd"
  },
  {
    "text": ":person-blue-speaking-microphone:",
    "url": "https://yt3.ggpht.com/FMaw3drKKGyc6dk3DvtHbkJ1Ki2uD0FLqSIiFDyuChc1lWcA9leahX3mCFMBIWviN2o8eyc=w24-h24-c-k-nd"
  },
  {
    "text": ":rocket-red-countdown-liftoff:",
    "url": "https://yt3.ggpht.com/lQZFYAeWe5-SJ_fz6dCAFYz1MjBnEek8DvioGxhlj395UFTSSHqYAmfhJN2i0rz3fDD5DQ=w24-h24-c-k-nd"
  },
  {
    "text": ":face-purple-rain-drops:",
    "url": "https://yt3.ggpht.com/woHW5Jl2RD0qxijnl_4vx4ZhP0Zp65D4Ve1DM_HrwJW-Kh6bQZoRjesGnEwjde8F4LynrQ=w24-h24-c-k-nd"
  },
  {
    "text": ":face-pink-drinking-tea:",
    "url": "https://yt3.ggpht.com/WRLIgKpnClgYOZyAwnqP-Edrdxu6_N19qa8gsB9P_6snZJYIMu5YBJX8dlM81YG6H307KA=w24-h24-c-k-nd"
  },
  {
    "text": ":person-purple-stage-event:",
    "url": "https://yt3.ggpht.com/YeVVscOyRcDJAhKo2bMwMz_B6127_7lojqafTZECTR9NSEunYO5zEi7R7RqxBD7LYLxfNnXe=w24-h24-c-k-nd"
  },
  {
    "text": ":face-purple-open-box:",
    "url": "https://yt3.ggpht.com/7lJM2sLrozPtNLagPTcN0xlcStWpAuZEmO2f4Ej5kYgSp3woGdq3tWFrTH30S3mD2PyjlQ=w24-h24-c-k-nd"
  },
  {
    "text": ":person-yellow-podium-blue:",
    "url": "https://yt3.ggpht.com/N28nFDm82F8kLPAa-jY_OySFsn3Ezs_2Bl5kdxC8Yxau5abkj_XZHYsS3uYKojs8qy8N-9w=w24-h24-c-k-nd"
  },
  {
    "text": ":baseball-white-cap-out:",
    "url": "https://yt3.ggpht.com/8DaGaXfaBN0c-ZsZ-1WqPJ6H9TsJOlUUQQEoXvmdROphZE9vdRtN0867Gb2YZcm2x38E9Q=w24-h24-c-k-nd"
  },
  {
    "text": ":whistle-red-blow:",
    "url": "https://yt3.ggpht.com/DBu1ZfPJTnX9S1RyKKdBY-X_CEmj7eF6Uzl71j5jVBz5y4k9JcKnoiFtImAbeu4u8M2X8tU=w24-h24-c-k-nd"
  },
  {
    "text": ":person-turquoise-crowd-surf:",
    "url": "https://yt3.ggpht.com/Q0wFvHZ5h54xGSTo-JeGst6InRU3yR6NdBRoyowaqGY66LPzdcrV2t-wBN21kBIdb2TeNA=w24-h24-c-k-nd"
  },
  {
    "text": ":finger-red-number-one:",
    "url": "https://yt3.ggpht.com/Hbk0wxBzPTBCDvD_y4qdcHL5_uu7SeOnaT2B7gl9GLB4u8Ecm9OaXCGSMMUBFeNGl5Q3fHJ2=w24-h24-c-k-nd"
  },
  {
    "text": ":text-yellow-goal:",
    "url": "https://yt3.ggpht.com/tnHp8rHjXecGbGrWNcs7xss_aVReaYE6H-QWRCXYg_aaYszHXnbP_pVADnibUiimspLvgX0L=w24-h24-c-k-nd"
  },
  {
    "text": ":medal-yellow-first-red:",
    "url": "https://yt3.ggpht.com/EEHiiIalCBKuWDPtNOjjvmEZ-KRkf5dlgmhe5rbLn8aZQl-pNz_paq5UjxNhCrI019TWOQ=w24-h24-c-k-nd"
  },
  {
    "text": ":person-blue-wheelchair-race:",
    "url": "https://yt3.ggpht.com/ZepxPGk5TwzrKAP9LUkzmKmEkbaF5OttNyybwok6mJENw3p0lxDXkD1X2_rAwGcUM0L-D04=w24-h24-c-k-nd"
  },
  {
    "text": ":card-red-penalty:",
    "url": "https://yt3.ggpht.com/uRDUMIeAHnNsaIaShtRkQ6hO0vycbNH_BQT7i3PWetFJb09q88RTjxwzToBy9Cez20D7hA=w24-h24-c-k-nd"
  },
  {
    "text": ":stopwatch-blue-hand-timer:",
    "url": "https://yt3.ggpht.com/DCvefDAiskRfACgolTlvV1kMfiZVcG50UrmpnRrg3k0udFWG2Uo9zFMaJrJMSJYwcx6fMgk=w24-h24-c-k-nd"
  },
  {
    "text": ":yt:",
    "url": "https://yt3.ggpht.com/IkpeJf1g9Lq0WNjvSa4XFq4LVNZ9IP5FKW8yywXb12djo1OGdJtziejNASITyq4L0itkMNw=w24-h24-c-k-nd"
  },
  {
    "text": ":oops:",
    "url": "https://yt3.ggpht.com/PFoVIqIiFRS3aFf5-bt_tTC0WrDm_ylhF4BKKwgqAASNb7hVgx_adFP-XVhFiJLXdRK0EQ=w24-h24-c-k-nd"
  },
  {
    "text": ":buffering:",
    "url": "https://yt3.ggpht.com/5gfMEfdqO9CiLwhN9Mq7VI6--T2QFp8AXNNy5Fo7btfY6fRKkThWq35SCZ6SPMVCjg-sUA=w24-h24-c-k-nd"
  },
  {
    "text": ":stayhome:",
    "url": "https://yt3.ggpht.com/_1FGHypiub51kuTiNBX1a0H3NyFih3TnHX7bHU06j_ajTzT0OQfMLl9RI1SiQoxtgA2Grg=w24-h24-c-k-nd"
  },
  {
    "text": ":dothefive:",
    "url": "https://yt3.ggpht.com/-nM0DOd49969h3GNcl705Ti1fIf1ZG_E3JxcOUVV-qPfCW6jY8xZ98caNLHkVSGRTSEb7Y9y=w24-h24-c-k-nd"
  },
  {
    "text": ":elbowbump:",
    "url": "https://yt3.ggpht.com/2ou58X5XuhTrxjtIM2wew1f-HKRhN_T5SILQgHE-WD9dySzzJdGwL4R1gpKiJXcbtq6sjQ=w24-h24-c-k-nd"
  },
  {
    "text": ":goodvibes:",
    "url": "https://yt3.ggpht.com/2CvFOwgKpL29mW_C51XvaWa7Eixtv-3tD1XvZa1_WemaDDL2AqevKbTZ1rdV0OWcnOZRag=w24-h24-c-k-nd"
  },
  {
    "text": ":thanksdoc:",
    "url": "https://yt3.ggpht.com/bUnO_VwXW2hDf-Da8D64KKv6nBJDYUBuo13RrOg141g2da8pi9-KClJYlUDuqIwyPBfvOO8=w24-h24-c-k-nd"
  },
  {
    "text": ":videocall:",
    "url": "https://yt3.ggpht.com/k5v_oxUzRWmTOXP0V6WJver6xdS1lyHMPcMTfxn23Md6rmixoR5RZUusFbZi1uZwjF__pv4=w24-h24-c-k-nd"
  },
  {
    "text": ":virtualhug:",
    "url": "https://yt3.ggpht.com/U1TjOZlqtS58NGqQhE8VWDptPSrmJNkrbVRp_8jI4f84QqIGflq2Ibu7YmuOg5MmVYnpevc=w24-h24-c-k-nd"
  },
  {
    "text": ":yougotthis:",
    "url": "https://yt3.ggpht.com/s3uOe4lUx3iPIt1h901SlMp_sKCTp3oOVj1JV8izBw_vDVLxFqk5dq-3NX-nK_gnUwVEXld3=w24-h24-c-k-nd"
  },
  {
    "text": ":sanitizer:",
    "url": "https://yt3.ggpht.com/EJ_8vc4Gl-WxCWBurHwwWROAHrPzxgePodoNfkRY1U_I8L1O2zlqf7-wfUtTeyzq2qHNnocZ=w24-h24-c-k-nd"
  },
  {
    "text": ":takeout:",
    "url": "https://yt3.ggpht.com/FizHI5IYMoNql9XeP7TV3E0ffOaNKTUSXbjtJe90e1OUODJfZbWU37VqBbTh-vpyFHlFIS0=w24-h24-c-k-nd"
  },
  {
    "text": ":hydrate:",
    "url": "https://yt3.ggpht.com/tpgZgmhX8snKniye36mnrDVfTnlc44EK92EPeZ0m9M2EPizn1vKEGJzNYdp7KQy6iNZlYDc1=w24-h24-c-k-nd"
  },
  {
    "text": ":chillwcat:",
    "url": "https://yt3.ggpht.com/y03dFcPc1B7CO20zgQYzhcRPka5Bhs6iSg57MaxJdhaLidFvvXBLf_i4_SHG7zJ_2VpBMNs=w24-h24-c-k-nd"
  },
  {
    "text": ":chillwdog:",
    "url": "https://yt3.ggpht.com/Ir9mDxzUi0mbqyYdJ3N9Lq7bN5Xdt0Q7fEYFngN3GYAcJT_tccH1as1PKmInnpt2cbWOam4=w24-h24-c-k-nd"
  },
  {
    "text": ":elbowcough:",
    "url": "https://yt3.ggpht.com/DTR9bZd1HOqpRJyz9TKiLb0cqe5Hb84Yi_79A6LWlN1tY-5kXqLDXRmtYVKE9rcqzEghmw=w24-h24-c-k-nd"
  },
  {
    "text": ":learning:",
    "url": "https://yt3.ggpht.com/ZuBuz8GAQ6IEcQc7CoJL8IEBTYbXEvzhBeqy1AiytmhuAT0VHjpXEjd-A5GfR4zDin1L53Q=w24-h24-c-k-nd"
  },
  {
    "text": ":washhands:",
    "url": "https://yt3.ggpht.com/qXUeUW0KpKBc9Z3AqUqr_0B7HbW1unAv4qmt7-LJGUK_gsFBIaHISWJNt4n3yvmAnQNZHE-u=w24-h24-c-k-nd"
  },
  {
    "text": ":socialdist:",
    "url": "https://yt3.ggpht.com/igBNi55-TACUi1xQkqMAor-IEXmt8He56K7pDTG5XoTsbM-rVswNzUfC5iwnfrpunWihrg=w24-h24-c-k-nd"
  },
  {
    "text": ":shelterin:",
    "url": "https://yt3.ggpht.com/gjC5x98J4BoVSEPfFJaoLtc4tSBGSEdIlfL2FV4iJG9uGNykDP9oJC_QxAuBTJy6dakPxVeC=w24-h24-c-k-nd"
  }
];

document.addEventListener('onEventReceived', function (obj) {
    // obj will contain information about the event
    const log = obj.target.getElementById("log");
    const messages = log.querySelectorAll(".message");
    messages.forEach(message => {
        if (message.getAttribute("data-processed") !== "true") {
            let messageText = message.textContent;
            emot.forEach(e => {
                const escapedText = e.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regEx = new RegExp(escapedText, "g");
                if (messageText.includes(e.text)) {
                    messageText = messageText.replace(regEx, (match, offset) => {
                      let margin_left = 3;
                      let margin_right = 3;
                      if (offset === 0){
                        margin_left = 0;
                        margin_right = 3;
                      } else if ([':', ' '].includes(messageText.charAt(offset - 1))) {
                        margin_left = 0;
                      }
                      return `<img style="vertical-align:text-top; margin-left:${margin_left}px; margin-right:${margin_right}px;" width="24" height="24" src="${e.url}" alt="${e.text}" />`;
                    });
                }
            });
            message.innerHTML = messageText;
            message.setAttribute("data-processed", "true");
        }
    });
});