<template>
  <div id="grid">
    <div>
      <h3>Button</h3>

      <it-button
        :type="switchBtn ? 'primary' : 'neutral'"
        @click="switchBtn = !switchBtn"
        >{{ switchBtn ? 'Following' : 'Click to follow' }}</it-button
      >

      <it-button>Button</it-button>
      <it-button type="primary">Button</it-button>
      <it-button type="success">Button</it-button>
      <it-button type="danger">Button</it-button>
      <it-button type="warning">Button</it-button>
      <it-button type="black">Button</it-button>
    </div>

    <div>
      <h3>Icon</h3>

      <it-icon box box-color="#3051ff" color="#fff" name="info" />
      <it-icon box box-color="#07d85b" color="#fff" name="room" />
      <it-icon box box-color="#ff45c0" color="#fff" name="favorite" />
    </div>

    <div>
      <h3>Colorpicker</h3>

      <it-popover borderless>
        <it-button>Delete</it-button>
        <template #content>
          <div>
            <it-colorpicker v-model="color" show-tooltip />
          </div>
        </template>
      </it-popover>

      <!-- <div class="demo-list">
        <div class="demo-item">
          <it-colorpicker v-model="color" />
        </div>
      </div> -->
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
      <it-tag type="primary" closable>Primary</it-tag>
      <it-tag type="primary" filled closable>Primary</it-tag>
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
      <it-radio
        v-model="radioValue"
        type="success"
        label="Success"
        value="11"
      />
      <it-radio v-model="radioValue" type="danger" label="Danger" value="22" />
      <it-radio
        v-model="radioValue"
        type="warning"
        label="Warning"
        value="33"
      />
    </div>

    <div>
      <h3>Checkbox</h3>

      <it-checkbox v-model="checkboxValue" type="primary" label="Primary" />
      <it-checkbox v-model="checkboxValue" type="success" label="Success" />
      <it-checkbox v-model="checkboxValue" type="danger" label="Danger" />
      <it-checkbox v-model="checkboxValue" type="warning" label="Warning" />
      <it-checkbox v-model="checkboxValue" type="black" label="Black" />
      <it-checkbox v-model="checkboxValue" type="neutral" label="Neutral" />
    </div>

    <div>
      <h3>Avatar</h3>

      <it-avatar />
      <it-avatar square />

      <div>
        <it-avatar-group square :max="15">
          <it-avatar v-for="i in 15" :key="i" />
          <it-avatar />
          <it-avatar />
          <it-avatar />
          <it-avatar />
        </it-avatar-group>
      </div>

      <div>
        <it-avatar-group vertical :max="10">
          <it-avatar v-for="i in 2" :key="i" />
          <it-avatar v-for="i in 2" :key="i" />
          <it-avatar v-for="i in 2" :key="i" />
          <it-avatar v-for="i in 2" :key="i" />
          <it-avatar v-for="i in 2" :key="i" />
          <it-avatar v-for="i in 2" :key="i" />
          <it-avatar />
        </it-avatar-group>
      </div>
    </div>

    <div>
      <h3>Collapse</h3>

      <it-collapse>
        <it-collapse-item title="Title 1"
          >The First Things First manifesto was written 29 November 1963 and
          published in 1964 by Ken Garland. It was backed by over 400 graphic
          designers and artists and also received the backing of Tony Benn,
          radical left-wing MP and activist, who published it in its entirety in
          The Guardian newspaper.</it-collapse-item
        >
        <it-collapse-item title="Title 2"
          >Reacting against a rich and affluent Britain of the 1960s, it tried
          to re-radicalise a design industry which the signatories felt had
          become lazy and uncritical. Drawing on ideas shared by critical
          theory, the Frankfurt School, and the counter-culture of the time, it
          explicitly reaffirmed the belief that design is not a neutral,
          value-free process.</it-collapse-item
        >
        <it-collapse-item title="Title 3"
          >It rallied against the consumerist culture that was purely concerned
          with buying and selling things and tried to highlight a Humanist
          dimension to graphic design theory. It was later updated and
          republished with a new group of signatories as the First Things First
          2000 manifesto.</it-collapse-item
        >
        <it-collapse-item title="Title 4"
          >Try Equal UI, you'll like it</it-collapse-item
        >
      </it-collapse>
    </div>

    <div>
      <h3>Input</h3>

      <it-input v-model="inputValue" suffix-icon="remove_red_eye" />
      <it-input v-model="inputValue" prefix-icon="cloud_queue" />
      <it-input
        v-model="inputValue"
        suffix-icon="remove_red_eye"
        prefix-icon="cloud_queue"
      />
    </div>

    <div>
      <h3>Textarea</h3>

      <it-textarea
        v-model="textareaValue"
        placeholder="Your placeholder"
      ></it-textarea>
    </div>

    <div>
      <h3>Number Input</h3>

      <it-number-input
        v-model="numberInputValue"
        label-top="Zdarova"
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
      <h3>Select</h3>
      <it-select
        v-model="selectValue"
        label-top="Label"
        :options="selectOptions"
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

        <template #menu>
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
      <it-button @click="$Message({ text: 'Primary message' })"
        >Default</it-button
      >
      <it-button @click="$Message.warning({ text: 'Warnning message' })"
        >Warning</it-button
      >
      <it-button @click="$Message.danger({ text: 'Danger message' })"
        >Danger</it-button
      >
    </div>

    <div>
      <h3>Modal</h3>
      <it-button @click="modal = !modal">Show modal</it-button>
      <it-modal v-model="modal">
        <template #image>
          <img
            src="https://images.unsplash.com/photo-1549277513-f1b32fe1f8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          />
        </template>

        <template #header>
          <h3 style="margin: 0">Header</h3>
        </template>

        <template #body>
          <p>asdaadadasd asdaadadasdasd</p>
        </template>
        <template #actions>
          <it-button @click="modal = false">Cancel</it-button>
          <it-button
            type="primary"
            @click="$Message({ text: 'Created' }), (modal = false)"
            >Create</it-button
          >
        </template>
      </it-modal>
    </div>

    <div>
      <h3>Notification</h3>
      <it-button
        @click="
          $Notification({
            title: 'Top-left notification',
            placement: 'top-left',
            text:
              'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
          })
        "
        >Top-left</it-button
      >
      <it-button
        @click="
          $Notification({
            title: 'Top-right notification',
            placement: 'top-right',
            text:
              'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
          })
        "
        >Top-right</it-button
      >
      <it-button
        @click="
          $Notification({
            title: 'Bottom-left notification',
            placement: 'bottom-left',
            text:
              'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
          })
        "
        >Bottom-left</it-button
      >
      <it-button
        @click="
          $Notification({
            title: 'Top-right notification',
            placement: 'bottom-right',
            text:
              'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
          })
        "
        >Bottom-right</it-button
      >
    </div>

    <div>
      <h3>Drawer</h3>
      <it-button @click="drawer = true">Show drawer</it-button>
      <it-drawer v-model="drawer" />
    </div>

    <div>
      <h3>Tabs</h3>
      <a
        href="https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html"
        target="_blank"
        rel="noopener noreferrer"
        >Make it accessible</a
      >

      <!-- <div style="margin-bottom: 22px; border: 1px solid #D3DAE6; border-radius: 4px; box-shadow: 0px 1px 1px 0px rgb(228,231,230,1); width: 100%;">
        <it-tabs>
          <it-tab title="Tab 1" style="padding: 12px;">Hello From Tab 1</it-tab>
          <it-tab title="Tab 2" style="padding: 12px;">Hello From Tab 2</it-tab>
          <it-tab title="Tab 3" style="padding: 12px;">Hello From Tab 3</it-tab>
          <it-tab title="Disabled" disabled>Hello From Tab 4</it-tab>
          <it-tab title="Tab 5" style="padding: 12px;">Hello From Tab 5</it-tab>
        </it-tabs>
      </div>

      <div style="border: 1px solid #D3DAE6; border-radius: 4px; box-shadow: 0px 1px 1px 0px rgb(228,231,230,1); width: 100%;">
        <it-tabs vertical>
          <it-tab title="Tab 1" style="padding: 12px;">Hello From Tab 1</it-tab>
          <it-tab title="Tab 2" style="padding: 12px;">Hello From Tab 2</it-tab>
          <it-tab title="Tab 3" style="padding: 12px;">Hello From Tab 3</it-tab>
          <it-tab title="Disabled" disabled style="padding: 12px;">Hello From Tab 4</it-tab>
          <it-tab title="Tab 5" style="padding: 12px;">Hello From Tab 5</it-tab>
        </it-tabs>
      </div> -->
    </div>

    <div>
      <h3>Toggle</h3>
      <it-toggle
        v-model="toggleIconsValue"
        icons
        :options="['wb_sunny', 'bedtime']"
      />
      <it-toggle
        v-model="toggleIconsValue"
        icons
        round
        :options="['wb_sunny', 'bedtime']"
      />
      <it-toggle
        v-model="toggleValue"
        style="width: 100%"
        :options="['Light', 'Dark', 'Hollow', 'Orange']"
      />
      <it-toggle
        v-model="toggleValue"
        style="width: 100%"
        round
        :options="['Light', 'Dark', 'Hollow', 'Orange']"
      />
    </div>
  </div>
</template>

<script>
const defaultColors = {
  hex: '#194d33e6',
  hsl: {
    h: 150,
    s: 0.5,
    l: 0.2,
    a: 0.9,
  },
  hsv: {
    h: 150,
    s: 0.66,
    v: 0.3,
    a: 0.9,
  },
  rgba: {
    r: 159,
    g: 96,
    b: 43,
    a: 0.9,
  },
  a: 0.9,
}

export default {
  name: 'app',
  data: () => ({
    color: defaultColors,
    toggleValue: 'Light',
    toggleIconsValue: 'wb_sunny',
    switchBtn: false,
    selectValue: '',
    selectOptions: [
      'asdad',
      'dsadad',
      '111111',
      'qweddf',
      'ewfrrtgfg',
      'asddddd',
      'effee',
      '34434',
      435345,
      43455,
    ],
    alertTitle: 'We think we know you',
    switchValue: false,
    radioValue: '00',
    checkboxValue: false,
    inputValue: '',
    modal: false,
    drawer: false,
    textareaValue: '',
    numberInputValue: 1,
    stepSliderValue: 40,
    progressValue: 40,
  }),
  methods: {},
}
</script>

<style lang="less">
.demo-list {
  display: flex;
  margin-bottom: 20px;
}
.demo-item {
  position: relative;
  margin-bottom: 10px;
  margin: 0 10px 0 10px;
  z-index: 2;
}

#grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

#grid > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 5px;
  border: 1px solid #d3dae6;
  border-radius: 6px;
  box-sizing: border-box;
  transition: 0.17s all ease-in-out;

  &:hover {
    border: 1px solid #fff;
    box-shadow: 0 0 0 1px rgba(50, 50, 93, 0.05),
      0 7px 14px 0 rgba(50, 50, 93, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07);
  }
}

#grid > div > * {
  margin: 5px;
}
</style>
