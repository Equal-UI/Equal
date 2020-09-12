<template>
  <div id="grid">
    <div>
      <h3>Icon</h3>

      <it-icon box box-color="#3051ff" color="#fff" name="info" />
      <it-icon box box-color="#07d85b" color="#fff" name="room" />
      <it-icon box box-color="#ff45c0" color="#fff" name="favorite" />
    </div>

    <div>
      <h3>Button</h3>

      <it-button>Button</it-button>
      <it-button type="primary">Button</it-button>
      <it-button type="success">Button</it-button>
      <it-button type="danger">Button</it-button>
      <it-button type="warning">Button</it-button>
      <it-button type="black">Button</it-button>
    </div>

    <div>
      <h3>Alert</h3>

      <it-alert iconbox type="primary" :title="alertTitle" :body="alertTitle" />
      <it-alert iconbox type="success" :title="alertTitle" :body="alertTitle" />
      <it-alert iconbox type="danger" :title="alertTitle" :body="alertTitle" />
      <it-alert iconbox type="warning" :title="alertTitle" :body="alertTitle" />
    </div>

    <div>
      <h3>Badge</h3>

      <it-badge type="primary" point>
        <it-button>Primary</it-button>
      </it-badge>
      <it-badge type="danger" point>
        <it-button icon="mail_outline"></it-button>
      </it-badge>
      <it-badge type="success" point>
        <it-button icon="thumb_up"></it-button>
      </it-badge>
      <it-badge type="warning" point>
        <it-button icon="error_outline"></it-button>
      </it-badge>
    </div>

    <div>
      <h3>Tag</h3>

      <it-tag>Neutral</it-tag>
      <it-tag type="primary">Primary</it-tag>
      <it-tag type="success">Success</it-tag>
      <it-tag type="danger">Danger</it-tag>
      <it-tag type="warning">Warning</it-tag>
      <it-tag type="black">Black</it-tag>
    </div>

    <div>
      <h3>Switch</h3>

      <it-switch v-model="switchValue" label="Primary" />
      <it-switch v-model="switchValue" type="success" label="Success" />
      <it-switch v-model="switchValue" type="danger" label="Danger" />
      <it-switch v-model="switchValue" type="warning" label="Warning" />
    </div>

    <div>
      <h3>Radio</h3>

      <it-radio v-model="radioValue" label="Primary" value="00" />
      <it-radio v-model="radioValue" type="success" label="Success" value="11" />
      <it-radio v-model="radioValue" type="danger" label="Danger" value="22" />
      <it-radio v-model="radioValue" type="warning" label="Warning" value="33" />
    </div>

    <div>
      <h3>Checkbox</h3>

      <it-checkbox type="primary" label="Primary" v-model="checkboxValue" />
      <it-checkbox type="success" label="Success" v-model="checkboxValue" />
      <it-checkbox type="danger" label="Danger" v-model="checkboxValue" />
      <it-checkbox type="warning" label="Warning" v-model="checkboxValue" />
      <it-checkbox type="black" label="Black" v-model="checkboxValue" />
      <it-checkbox type="neutral" label="Neutral" v-model="checkboxValue" />
    </div>

    <div>
      <h3>Avatar</h3>

      <it-avatar />
      <it-avatar square />

      <it-avatar-group :max="5">
        <it-avatar />
        <it-avatar />
        <it-avatar />
        <it-avatar />
        <it-avatar />
        <it-avatar />
      </it-avatar-group>
    </div>

    <div>
      <h3>Collapse</h3>

      <it-collapse>
        <it-collapse-item
          title="Title 1"
        >The First Things First manifesto was written 29 November 1963 and published in 1964 by Ken Garland. It was backed by over 400 graphic designers and artists and also received the backing of Tony Benn, radical left-wing MP and activist, who published it in its entirety in The Guardian newspaper.</it-collapse-item>
        <it-collapse-item
          title="Title 2"
        >Reacting against a rich and affluent Britain of the 1960s, it tried to re-radicalise a design industry which the signatories felt had become lazy and uncritical. Drawing on ideas shared by critical theory, the Frankfurt School, and the counter-culture of the time, it explicitly reaffirmed the belief that design is not a neutral, value-free process.</it-collapse-item>
        <it-collapse-item
          title="Title 3"
        >It rallied against the consumerist culture that was purely concerned with buying and selling things and tried to highlight a Humanist dimension to graphic design theory. It was later updated and republished with a new group of signatories as the First Things First 2000 manifesto.</it-collapse-item>
        <it-collapse-item title="Title 4">Try Equal UI, you'll like it</it-collapse-item>
      </it-collapse>
    </div>

    <div>
      <h3>Input</h3>

      <it-input mask v-model="inputValue" suffix-icon="remove_red_eye" />
      <it-input v-model="inputValue" prefix-icon="cloud_queue" />
      <it-input v-model="inputValue" suffix-icon="remove_red_eye" prefix-icon="cloud_queue" />
    </div>

    <div>
      <h3>Textarea</h3>

      <it-textarea mask v-model="textareaValue" placeholder="Your placeholder"></it-textarea>
    </div>

    <div>
      <h3>Number Input</h3>

      <it-number-input
        v-model="numberInputValue"
        labelTop="Zdarova"
        resize-on-write
        :min="0"
        :max="100"
      />
    </div>

    <div>
      <h3>Tooltip</h3>

      <it-button-group vertical>
        <it-tooltip content="Top" placement="top">
          <it-button>Top</it-button>
        </it-tooltip>
        <it-tooltip content="Right" placement="right">
          <it-button>Right</it-button>
        </it-tooltip>
        <it-tooltip content="Left" placement="left">
          <it-button>Left</it-button>
        </it-tooltip>
        <it-tooltip content="Bottom" placement="bottom">
          <it-button>Bottom</it-button>
        </it-tooltip>
      </it-button-group>
    </div>

    <div>
      <h3>Slider</h3>
      <it-slider v-model="stepSliderValue" :min="0" :max="100" />
    </div>
    
    
    <div>
      <h3>Progress bar</h3>
      <div style="padding: 60px 0px; width: 100%">
      <it-progressbar :progress="stepSliderValue" />
      <it-progressbar :progress="stepSliderValue" tooltip="bottom" />

      </div>
    </div>

    <div>
        <it-select
          labelTop="Label"
          :options="selectOptions"
          v-model="selectValue"
        >
        </it-select>
    </div>

    <div>
      <h3>Loading bar</h3>
      <it-button @click="$Loading.start()">Start</it-button>
      <it-button @click="$Loading.update(80)">80%</it-button>
      <it-button @click="$Loading.finish()">Finish</it-button>
    </div>

    <div>
      <h3>Dropdown</h3>
      <it-dropdown>
        <it-button>Hover me</it-button>

        <template v-slot:menu>
        <it-dropdown-menu>
          <it-dropdown-item>Hello</it-dropdown-item>
          <it-dropdown-item disabled>Disabled</it-dropdown-item>
          <it-dropdown-item icon="cloud">Cloud</it-dropdown-item>
          <it-dropdown-item divided>Divided</it-dropdown-item>
        </it-dropdown-menu>
        </template>
      </it-dropdown>
    </div>

    <div>
      <h3>Message</h3>
      <it-button @click="$Message({text: 'Primary message'})">Default</it-button>
      <it-button @click="$Message.warning({text: 'Warnning message'})">Warning</it-button>
      <it-button @click="$Message.danger({text: 'Danger message'})">Danger</it-button>
    </div>

    <div>
      <h3>Notification</h3>
      <it-button
        @click="$Notification({
      title: 'Top-left notification',
      placement: 'top-left',
      text:
        'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
      })"
      >Top-left</it-button>
      <it-button
        @click="$Notification({
      title: 'Top-right notification',
      placement: 'top-right',
      text:
        'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
      })"
      >Top-right</it-button>
      <it-button
        @click="$Notification({
      title: 'Bottom-left notification',
      placement: 'bottom-left',
      text:
        'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
      })"
      >Bottom-left</it-button>
      <it-button
        @click="$Notification({
      title: 'Top-right notification',
      placement: 'bottom-right',
      text:
        'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
      })"
      >Bottom-right</it-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    selectValue: '',
    selectOptions: ['asdad', 'dsadad', '111111', 'qweddf', 'ewfrrtgfg', 'asddddd', 'effee', '34434', 435345, 43455],
    alertTitle: "We think we know you",
    switchValue: false,
    radioValue: "00",
    checkboxValue: false,
    inputValue: "",
    textareaValue: "",
    numberInputValue: 1,
    stepSliderValue: 40,
    progressValue: 40,
  }),
  methods: {},
};
</script>

<style>
#grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

#grid > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid grey;
}

#grid > div > * {
  margin: 5px;
}
</style>