<template>
  <div class="sidebar">
    <NavLinks />
    <slot name="top" />
    <ul
      class="sidebar-links"
      v-if="items.length"
    >
      <li
        v-for="(item, i) in items"
        :key="i" v-on:click="fileName($event.target)"
      >
        <SidebarGroup
          v-if="item.type === 'group'"
          :item="item"
          :first="i === 0"
          :open="i === openGroupIndex"
          :collapsable="item.collapsable || item.collapsible"
          @toggle="toggleGroup(i)"
        />
        <SidebarLink v-else :item="item"/>
      </li>
    </ul>
    <slot name="bottom" />
  </div>
</template>

<script>
import SidebarGroup from './SidebarGroup.vue'
import SidebarLink from './SidebarLink.vue'
import NavLinks from './NavLinks.vue'
import DropdownTransition from './DropdownTransition.vue'
import { isActive } from './util'

export default {
  components: { SidebarGroup, SidebarLink, NavLinks, DropdownTransition },

  props: ['items'],

  data () {
    let href = '';
    if (typeof window !== 'undefined') {
        href = window.location.href
    }
    return {
      openGroupIndex: 0,
      href,
    }
  },

  created () {
    this.refreshIndex()
  },

  watch: {
    '$route' () {
      this.refreshIndex()
    }
  },

  methods: {
    refreshIndex () {
      const index = resolveOpenGroupIndex(
        this.$route,
        this.items
      )
      if (index > -1) {
        this.openGroupIndex = index
      }
    },

    toggleGroup (index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index
    },

    isActive (page) {
      return isActive(this.$route, page.path)
    },
    // 点击标题
    fileName (a) {
        var nextSibling = a.nextSibling;
        // 点击没有子标题时 nextSibling === null，点击的是分组侧边栏时 nextSibling === #text
        // 当点击的标题有子标题时，才收缩标题
        if (nextSibling && nextSibling.tagName === 'UL') {
            setTimeout(this.changeStyle,5, a.nextSibling);
        }
        // setTimeout(this.changeStyle,5);
        // 确保点击是的md标题
        // if(a.href && a.href.indexOf('#') === -1) {
        //     // 延迟执行，让下面能获取到二级菜单
        //     setTimeout(this.changeStyle,5);
        //     console.log(22222);
        // }
    },
    // 切换二级菜单
    changeStyle (b) {
        if(this.href !== location.href) {
            this.href = location.href;
            b.style.height = 'auto';
            b.style.overflow = 'inherit';
        } else if (b.style.height === '' || b.style.height === 'auto') {
            b.style.height = '0';
            b.style.overflow = 'hidden';
        } else {
            b.style.height = 'auto';
            b.style.overflow = 'inherit';
        }
    }
  }
}

function resolveOpenGroupIndex (route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.type === 'group' && item.children.some(c => isActive(route, c.path))) {
      return i
    }
  }
  return -1
}
</script>

<style lang="stylus">
@import './styles/config.styl';

.sidebar {
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  a {
    display: inline-block;
  }

  .nav-links {
    display: none;
    border-bottom: 1px solid $borderColor;
    padding: 0.5rem 0 0.75rem 0;

    a {
      font-weight: 600;
    }

    .nav-item, .repo-link {
      display: block;
      line-height: 1.25rem;
      font-size: 1.1em;
      padding: 0.5rem 0 0.5rem 1.5rem;
    }
  }

  .sidebar-links {
    padding: 1.5rem 0;
  }

  .sidebar-group-items {
    transition: height 0.1s ease-out;
    overflow: hidden;
  }
}

@media (max-width: $MQMobile) {
  .sidebar {
    .nav-links {
      display: block;

      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after {
        top: calc(1rem - 2px);
      }
    }

    .sidebar-links {
      padding: 1rem 0;
    }
  }
}
</style>
