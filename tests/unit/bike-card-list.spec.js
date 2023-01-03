import { mount } from '@vue/test-utils'
import BikeCardList from '@/components/BikeCardList'
import BikeCard from '@/components/BikeCard'

describe('Testing BikeCardList.vue', () => {
  it('should render a bike card for bike person', () => {
    // when
    const wrapper = mount(BikeCardList, {
      propsData: {
        bikes: [{
          id: 1,
          kategorie: 'EBIKE',
          abnutzungsgrad: 'STARKE_ABNUTZUNG',
          farbe: 'MIXED',
          price: 30.00,
          eigentuemer: {
            id: 1,
            username: '1',
            firstName: '1',
            lastName: '1',
            mailaddress: '1@1.de',
            fahrradIds: [
              1
            ],
            password: '$2a$10$7/h0hrk5sJllc3xg3SxauOsHTbu3YVJTRPN4O1CmlAUcVax4R9yjq'
          },
          bildUrl: 'https://images.internetstores.de/products/1484117/02/e77f98/cube-cargo-sport-hybrid-500-275-flashwhitenblack-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=300x300',
          kurzeBeschreibung: 'Der reinste Berlit',
          langeBeschreibung: 'adgöhsdflkghsdogjsdfökgölsdfhjg'
        },
        {
          id: 2,
          kategorie: 'EBIKE',
          abnutzungsgrad: 'STARKE_ABNUTZUNG',
          farbe: 'MIXED',
          price: 30.00,
          eigentuemer: {
            id: 1,
            username: '1',
            firstName: '1',
            lastName: '1',
            mailaddress: '1@1.de',
            fahrradIds: [
              1
            ],
            password: '$2a$10$7/h0hrk5sJllc3xg3SxauOsHTbu3YVJTRPN4O1CmlAUcVax4R9yjq'
          },
          bildUrl: 'https://images.internetstores.de/products/1484117/02/e77f98/cube-cargo-sport-hybrid-500-275-flashwhitenblack-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=300x300',
          kurzeBeschreibung: 'Der reinste Berlit',
          langeBeschreibung: 'adgöhsdflkghsdogjsdfökgölsdfhjg'
        }
        ]
      }
    })

    // then
    const personCards = wrapper.findAllComponents(BikeCard)
    expect(personCards.length).toBe(2)
  })
})
