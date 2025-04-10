---
banner:
  name: '一款 JavaScript/TypeScript 原生对象扩展框架'
  desc: 'Buession Prototype 是基于对原生 JavaScript 对象（如：String、Array、Date）的扩展，可用于 Node 环境，和浏览器兼容性的处理，并添加在实际场景中的一些常用方法。'
  btns: 
    - { name: '开 始', href: '/docs/quickstart.html', primary: true }
    - { name: 'Github >', href: 'https://github.com/buession/buession-prototype' }
  caption: '当前版本: v4.1.5'
features: 
  - { name: '优雅', desc: '旨在提供便捷的、可靠的基于原生 JavaScript/TypeScript 扩展的类库，拥有完善的文档和高可读性的源码' }
  - { name: '易用', desc: '觉大部分 API 基于原生 JavaScript/TypeScript 对象/类的扩展，参考学习 prototype.js' }
  - { name: '简洁', desc: '与其它框架无耦合，高内聚低耦合' }
  - { name: '高效', desc: 'min 版本 js 文件仅 16 kB，加载速度快，代码简洁运行效率高' }
  - { name: '兼容', desc: '支持 Node 和 Browser 运行环境，支持主流浏览器，支持原生 JS 和 ES' }
  - { name: '开源', desc: '作为开源项目，我们拥有高质量的代码，对社区的需求能够作出积极快速响应' }

footer:
  copyright:
    name: 'Buession Team'
    href: 'https://www.buession.com/'
  links:
    前端开源库:
      - { name: 'Buession Prototype', href: 'https://prototype.buession.com/' }
      - { name: 'Buession Shirojs', href: 'https://shirojs.buession.com/' }
    后端开源库:
      - { name: 'Buession Framework', href: 'https://www.buession.com/' }
      - { name: 'Buession Security', href: 'https://security.buession.com/' }
      - { name: 'Buession Logging', href: 'https://logging.buession.com/' }
      - { name: 'Buession SpringBoot', href: 'https://springboot.buession.com/' }
      - { name: 'Buession SpringCloud', href: 'https://springcloud.buession.com/' }
      - { name: 'Buession Cas', href: 'https://cas.buession.com/' }

---

<Homepage banner={banner} features={features} />
<Footer distPath={props.page.distPath} copyRight={props.footer.copyright} links={props.footer.links} />