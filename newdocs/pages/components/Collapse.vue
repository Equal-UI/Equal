<template>
  <div>
    <h1>Collapse</h1>
    <Box :code="collapseCode" title="Default">
      <it-collapse>
        <it-collapse-item title="Title 1">
          The First Things First manifesto was written 29 November 1963 and
          published in 1964 by Ken Garland. It was backed by over 400 graphic
          designers and artists and also received the backing of Tony Benn,
          radical left-wing MP and activist, who published it in its entirety in
          The Guardian newspaper.
        </it-collapse-item>
        <it-collapse-item title="Title 2">
          Reacting against a rich and affluent Britain of the 1960s, it tried to
          re-radicalise a design industry which the signatories felt had become
          lazy and uncritical. Drawing on ideas shared by critical theory, the
          Frankfurt School, and the counter-culture of the time, it explicitly
          reaffirmed the belief that design is not a neutral, value-free
          process.
        </it-collapse-item>
        <it-collapse-item title="Title 3">
          It rallied against the consumerist culture that was purely concerned
          with buying and selling things and tried to highlight a Humanist
          dimension to graphic design theory. It was later updated and
          republished with a new group of signatories as the First Things First
          2000 manifesto.
        </it-collapse-item>
        <it-collapse-item title="Title 4">
          Try Equal UI, you'll like it
        </it-collapse-item>
      </it-collapse>
    </Box>

    <Box :code="singleCode" title="Single">
      <div class="flex w-full flex-col">
        <it-collapse>
          <it-collapse-item title="Article">Hello there</it-collapse-item>
        </it-collapse>
        <br />
        <it-collapse>
          <it-collapse-item title="Article">Hello there</it-collapse-item>
        </it-collapse>
        <br />
        <it-collapse>
          <it-collapse-item title="Article">Hello there</it-collapse-item>
        </it-collapse>
      </div>
    </Box>

    <Box :code="nestedCode" title="Nested">
      <it-collapse>
        <it-collapse-item title="Question">
          Why would you use nested collapse components?
          <br />
          <br />
          <it-collapse>
            <it-collapse-item title="Answer">Because I can :3</it-collapse-item>
          </it-collapse>
        </it-collapse-item>
      </it-collapse>
    </Box>

    <Box :code="titleCode" title="Custom title">
      <it-collapse>
        <it-collapse-item>
          <template #title>Magic 🔮</template>
          Omg it's David Blaine!
        </it-collapse-item>
      </it-collapse>
    </Box>

    <props-table
      tag-name="it-collapse-item"
      :data-sheet="dataSheet"
      :slot-sheet="slotSheet"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    collapseCode: `<it-collapse>
  <it-collapse-item title="Title 1">
    The First Things First manifesto was written 29 November 1963 and
    published in 1964 by Ken Garland. It was backed by over 400 graphic
    designers and artists and also received the backing of Tony Benn,
    radical left-wing MP and activist, who published it in its entirety in
    The Guardian newspaper.
  </it-collapse-item>
  <it-collapse-item title="Title 2">
    Reacting against a rich and affluent Britain of the 1960s, it tried to
    re-radicalise a design industry which the signatories felt had become
    lazy and uncritical. Drawing on ideas shared by critical theory, the
    Frankfurt School, and the counter-culture of the time, it explicitly
    reaffirmed the belief that design is not a neutral, value-free
    process.
  </it-collapse-item>
  <it-collapse-item title="Title 3">
    It rallied against the consumerist culture that was purely concerned
    with buying and selling things and tried to highlight a Humanist
    dimension to graphic design theory. It was later updated and
    republished with a new group of signatories as the First Things First
    2000 manifesto.
  </it-collapse-item>
  <it-collapse-item title="Title 4">
    Try Equal UI, you'll like it
  </it-collapse-item>
</it-collapse>`,

    singleCode: `<it-collapse>
  <it-collapse-item title="Article">
    Hello there
  </it-collapse-item>
</it-collapse>

<it-collapse>
  <it-collapse-item title="Article">
    Hello there
  </it-collapse-item>
</it-collapse>

<it-collapse>
  <it-collapse-item title="Article">
    Hello there
  </it-collapse-item>
</it-collapse>`,

    nestedCode: `<it-collapse>
  <it-collapse-item title="Question">
    Why would you use nested collapse components?

    <it-collapse>
      <it-collapse-item title="Answer">Because I can :3</it-collapse-item>
    </it-collapse>
  </it-collapse-item>
</it-collapse>`,

    titleCode: `<it-collapse>
  <it-collapse-item>
    <template #title>Magic 🔮</template>
    Omg it's David Blaine!
  </it-collapse-item>
</it-collapse>`,

    dataSheet: [
      {
        property: 'opened',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Opened state',
      },
      {
        property: 'title',
        type: ['String'],
        default: '',
        values: [],
        description: 'Title of the collapse item',
      },
    ],
    slotSheet: [
      {
        name: 'default',
        description: 'Collapse item body',
      },
    ],
  }),
})
</script>
