interface Country {
    markerOffset: number
    name: string
    coordinates: [number, number]
    title: string
    description: string
    isActive: boolean
    img: any
    idx: number
    office: {
      email: string
      phone: string
      address: string
    }
  }
  
  export const countries = [
    {
      markerOffset: -5,
      name: 'India',
      coordinates: [76.68525429888956, 30.6983971821195] as [number, number],
      title: 'India',
      description:
        'Asha Tower, Phase 8B, Industrial Area, Sector 75, Sahibzada Ajit Singh Nagar (Mohali), Punjab 160055',
      isActive: true,
      idx: 0,
      office: {
        email: 'admin@zenmonk.tech',
        phone: '+91 9012345678, +91 9012345678',
        address: 'Asha Tower, Phase 8B, SAS Nagar (Mohali), Punjab,160055',
      },
    },
  
    {
      markerOffset: 35,
      name: 'Spain (Barcelona)',
      coordinates: [2.170213179925305, 41.388278966047864] as [number, number],
      title: 'Spain Barcelona ',
      description: 'C. Isabel Torres, 21, 39011. Santander, Cantabria, Spain',
      isActive: false,
      idx: 2,
      office: {
        email: 'admin@zenmonk.tech',
        phone: '+91 9012345678, +91 9012345678',
        address: 'Torres, Cantabria, Spain & 21, 39011,Barcelona,Spain',
      },
    },
    {
      markerOffset: 40,
      name: 'Brazil',
      coordinates: [-60.49476028770868, -27.681400465069725] as [number, number],
      title: 'Brazil',
      description: 'R. Vento Sul, 126 - Campeche Leste, Florianópolis, Brazil',
      isActive: false,
      idx: 3,
      office: {
        email: 'admin@zenmonk.tech',
        phone: '+91 9012345678, +91 9012345678',
        address: 'R. Vento Sul, 126 - Campeche Leste, Florianópolis, Brazil',
      },
    },
    {
      markerOffset: 8,
      marketXoffSet: -35,
      name: 'Ecuador',
      coordinates: [-79.89719433413921, -2.156491409382448] as [number, number],
      title: 'Ecuador',
      description: 'Geronimo y Miguel H. Alcivar, 090512. Guayaquil, Ecuador',
      isActive: false,
      idx: 4,
      office: {
        email: 'admin@zenmonk.tech',
        phone: '+91 9012345678, +91 9012345678',
        address: 'Geronimo y Miguel H. Alcivar, 090512. Guayaquil, Ecuador',
      },
    },
    {
      markerOffset: 35,
      name: 'Peru',
      coordinates: [-70.9970553457021, -12.125950620181154] as [number, number],
      title: 'Peru',
      description: 'Jr. Chimucápac 163, Santiago de Surco 15038, Peru',
      isActive: false,
      idx: 5,
      office: {
        email: 'admin@zenmonk.tech',
        phone: '+91 9012345678, +91 9012345678',
        address: 'Jr. Chimucápac 163, Santiago de Surco 15038, Peru',
      },
    },
    {
      markerOffset: -15,
      name: 'Colombia',
      coordinates: [-74.07765096111325, 4.630663596404083] as [number, number],
      title: 'Colombia',
      description: 'Cl. 40 #26a8, Bogotá, Colombia',
      isActive: false,
      idx: 6,
      office: {
        email: 'admin@zenmonk.tech',
        phone: '+91 9012345678, +91 9012345678',
        address: 'Cl. 40 #26a8, Bogotá, Colombia',
      },
    },
  ]
  export type { Country }
  