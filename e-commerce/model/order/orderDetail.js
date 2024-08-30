import { mockIp, mockReqId } from '../../utils/mock';
import i18n  from '../../i18n/index';

const orderResps = [
  {
    data: {
      saasId: '88888888',
      storeId: '1000',
      storeName: i18n.t('Cloud Mall Shenzhen flagship store'),
      uid: '88888888205468',
      parentOrderNo: '354021731671873099',
      orderId: '354021735982432279',
      orderNo: '354021731671873099',
      orderType: 0,
      orderSubType: 0,
      orderStatus: 5,
      orderSubStatus: null,
      totalAmount: '10010',
      goodsAmount: '10000',
      goodsAmountApp: '10000',
      paymentAmount: '20',
      freightFee: '10',
      packageFee: '0',
      discountAmount: '9990',
      channelType: 0,
      channelSource: '',
      channelIdentity: '',
      remark: 'Will batteries be included with the purchase of an electric fan?',
      cancelType: 0,
      cancelReasonType: 0,
      cancelReason: '',
      rightsType: 0,
      createTime: '1600350829288',
      orderItemVOs: [
        {
          id: '354021736133427225',
          orderNo: null,
          spuId: '3',
          skuId: '135696670',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName:
            i18n.t('Tencent Aurora Box 4 Smart Internet TV Set-top Box 6K Gigabit Network Set-top Box 4K High Resolution'),
          specifications: [
            { specTitle: i18n.t('Color'), specValue: i18n.t('Cyan-blue') },
            { specTitle: i18n.t('Type'), specValue: i18n.t('Premium gift set') },
          ],
          goodsPictureUrl:
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3b.png',
          originPrice: '0',
          actualPrice: '9999',
          buyQuantity: 1,
          itemTotalAmount: '9999',
          itemDiscountAmount: '9990',
          itemPaymentAmount: '10',
          goodsPaymentPrice: '10',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: [{ primary: false }],
        },
      ],
      logisticsVO: {
        logisticsType: 1,
        logisticsNo: '',
        logisticsStatus: null,
        logisticsCompanyCode: '',
        logisticsCompanyName: '',
        receiverAddressId: '14',
        provinceCode: '440000',
        cityCode: '440300',
        countryCode: '440306',
        receiverProvince: 'Guangdong Province',
        receiverCity: 'Shenzhen',
        receiverCountry: 'Bao\'an District',
        receiverArea: '',
        receiverAddress: 'No. 28, Shajing Central Road, Lisha Huadu, Building XX, Unit XX',
        receiverPostCode: '',
        receiverLongitude: '113.829127',
        receiverLatitude: '22.713649',
        receiverIdentity: '88888888205468',
        receiverPhone: '17612345678',
        receiverName: 'Test user',
        expectArrivalTime: null,
        senderName: '',
        senderPhone: '',
        senderAddress: '',
        sendTime: null,
        arrivalTime: null,
      },
      paymentVO: {
        payStatus: 1,
        amount: '20',
        currency: null,
        payType: null,
        payWay: null,
        payWayName: null,
        interactId: null,
        traceNo: null,
        channelTrxNo: null,
        period: null,
        payTime: null,
        paySuccessTime: null,
      },
      buttonVOs: [{ primary: true, type: 1, name: 'Pay' }],
      labelVOs: null,
      invoiceVO: null,
      couponAmount: '0',
      autoCancelTime: '1823652629288',
      orderStatusName: 'To pay',
      orderSatusRemark: 'Pay ￥0.20',
      logisticsLogVO: null,
      invoiceStatus: 3,
      invoiceDesc: 'Do not need invoice',
      invoiceUrl: null,
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 89,
    success: true,
  },
  {
    data: {
      saasId: '88888888',
      storeId: '1000',
      storeName: i18n.t('Cloud Mall Shenzhen flagship store'),
      uid: '88888888205468',

      parentOrderNo: '132381532610540875',
      orderId: '132381537256650240',
      orderNo: '132381532610540875',
      orderType: 0,
      orderSubType: 0,
      orderStatus: 10,
      orderSubStatus: null,
      totalAmount: '76600',
      goodsAmount: '76600',
      goodsAmountApp: '76600',
      paymentAmount: '36800',
      freightFee: '0',
      packageFee: '0',
      discountAmount: '34800',
      channelType: 0,
      channelSource: '',
      channelIdentity: '',
      remark: 'Please give an accessory.',
      cancelType: 0,
      cancelReasonType: 0,
      cancelReason: '',
      rightsType: 0,

      createTime: '1587140043976',

      orderItemVOs: [
        {
          id: '132381537407645696',
          orderNo: null,
          spuId: '0',
          skuId: '135676631',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName: i18n.t('White short-sleeve dress with ruffle hem, loose-fitting, Korean-style refreshing, and elegant'),
          goodsPictureUrl:
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
          originPrice: '40000',
          actualPrice: '29800',
          specifications: [
            {
              specTitle: i18n.t('Color'),
              specValue: i18n.t('Beige'),
            },
            {
              specTitle: i18n.t('Size'),
              specValue: i18n.t('S'),
            },
          ],
          buyQuantity: 1,
          itemTotalAmount: '29800',
          itemDiscountAmount: '19813',
          itemPaymentAmount: '9987',
          goodsPaymentPrice: '9987',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: null,
        },
        {
          id: '132381537407645952',
          orderNo: null,
          spuId: '7',
          skuId: '135691633',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName:
            i18n.t('Stainless steel knife, fork, and spoon set for home available in gold and silver color'),
          goodsPictureUrl:
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2b.png',
          originPrice: '29900',
          actualPrice: '19900',
          specifications: [
            { specTitle: i18n.t('Color'), specValue: i18n.t('Creamy yellow') },
            { specTitle: i18n.t('Type'), specValue: i18n.t('Three-piece set') },
          ],
          buyQuantity: 1,
          itemTotalAmount: '19900',
          itemDiscountAmount: '13230',
          itemPaymentAmount: '6670',
          goodsPaymentPrice: '6670',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: null,
        },
        {
          id: '132381537407646208',
          orderNo: null,
          spuId: '1',
          skuId: '135691631',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName: i18n.t('Pure cotton and round-neck short-sleeve T-shirt in pure white'),
          goodsPictureUrl:
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08a.png',
          originPrice: '31900',
          actualPrice: '26900',
          specifications: [
            {
              specTitle: i18n.t('Color'),
              specValue: i18n.t('White'),
            },
            {
              specTitle: i18n.t('Size'),
              specValue: i18n.t('S'),
            },
          ],
          buyQuantity: 1,
          itemTotalAmount: '26900',
          itemDiscountAmount: '6757',
          itemPaymentAmount: '20143',
          goodsPaymentPrice: '20143',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: null,
        },
      ],
      logisticsVO: {
        logisticsType: 1,
        logisticsNo: '',
        logisticsStatus: null,
        logisticsCompanyCode: '',
        logisticsCompanyName: '',

        receiverAddressId: '2',
        provinceCode: '440000',
        cityCode: '440300',
        countryCode: '440306',
        receiverProvince: 'Guangdong Province',
        receiverCity: 'Guangzhou',
        receiverCountry: 'Haizhu District',
        receiverArea: '',
        receiverAddress: 'No. 397 Xingangzhong Road',
        receiverPostCode: '',
        receiverLongitude: '113.829127',
        receiverLatitude: '22.713649',
        receiverIdentity: '88888888205468',
        receiverPhone: '17612345678',
        receiverName: 'Zhang San',
        expectArrivalTime: null,
        senderName: '',
        senderPhone: '',
        senderAddress: '',
        sendTime: null,
        arrivalTime: null,
      },
      paymentVO: {
        payStatus: 1,
        amount: '36800',
        currency: 'CNY',
        payType: 0,
        payWay: null,
        payWayName: null,
        interactId: '4923587',
        traceNo: null,
        channelTrxNo: null,
        period: null,
        payTime: '1600162877000',
        paySuccessTime: '1600162877538',
      },
      buttonVOs: [
        {
          primary: false,
          type: 2,
          name: 'Cancel order',
        },
        {
          primary: true,
          type: 9,
          name: 'Buy again',
        },
      ],
      labelVOs: null,
      invoiceVO: {
        buyerName: 'Tencent Computer Systems Company Ltd.', //个人或公司名称
        buyerTaxNo: '9144 9808 0909 0293 XG', //税号
        buyerPhone: '18600008888', //手机
        email: '73900484@qq.com', //邮箱
        titleType: 2, //发票抬头 1-个人 2-公司
        ontentType: 1, //发票内容 1-明细 2类别
        invoiceType: 5, //是否开票 0-不开 5-电子发票
        money: '1.54',
      },
      trajectoryVos: [
        {
          title: 'Order has been placed.',
          icon: 'https://cdn-we-retail.ym.tencent.com/web/trajectoryIcons/ordered.svg',
          code: '200002',
          nodes: [
            {
              status: 'The order has been paid. Payment method: WeChat Pay',
              timestamp: '1600162877506',
              remark: null,
            },
          ],
          isShow: true,
        },
        {
          title: '',
          icon: null,
          code: '200001',
          nodes: [
            {
              status: 'Order has submitted',
              timestamp: '1600162856204',
              remark: null,
            },
          ],
          isShow: true,
        },
      ],

      couponAmount: '5000',
      autoCancelTime: null,
      orderStatusName: 'To ship',
      orderSatusRemark: null,
      logisticsLogVO: null,
      invoiceStatus: 3,
      invoiceDesc: 'Do not need invoice',
      invoiceUrl: null,
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 79,
    success: true,
  },
  {
    data: {
      saasId: '88888888',
      storeId: '1000',
      storeName: i18n.t('Cloud Mall Shenzhen flagship store'),
      uid: '88888888205468',
      parentOrderNo: '132222623132329291',
      orderId: '132222629674264064',
      orderNo: '132222623132329291',
      orderType: 0,
      orderSubType: 0,
      orderStatus: 40,
      orderSubStatus: null,
      totalAmount: '500400',
      goodsAmount: '500400',
      goodsAmountApp: '500400',
      paymentAmount: '458600',
      freightFee: '0',
      packageFee: '0',
      discountAmount: '36800',
      channelType: 0,
      channelSource: '',
      channelIdentity: '',
      remark: 'I purchased a buy one, get one free deal, please remember to include the free item.',
      cancelType: 3,
      cancelReasonType: 0,
      cancelReason: '',
      rightsType: 0,
      createTime: '1587130572345',
      orderItemVOs: [
        {
          id: '132222629825259776',
          orderNo: null,
          spuId: '5',
          skuId: '135691625',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName:
            i18n.t('Mini portable high aesthetic Bluetooth wireless headphones with stereo sound'),
          goodsPictureUrl:
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png',
          originPrice: '15900',
          actualPrice: '8900',
          specifications: [
            {
              specTitle: i18n.t('Color'),
              specValue: i18n.t('Black'),
            },
            {
              specTitle: i18n.t('Type'),
              specValue: i18n.t('Simple'),
            },
          ],
          buyQuantity: 1,
          itemTotalAmount: '8900',
          itemDiscountAmount: '2134',
          itemPaymentAmount: '6766',
          goodsPaymentPrice: '6766',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: [{ primary: false, type: 4, name: 'Apply for after-sale service' }],
        },
        {
          id: '132222629825260032',
          orderNo: null,
          spuId: '0',
          skuId: '135676631',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName: i18n.t('White short-sleeve dress with ruffle hem, loose-fitting, Korean-style refreshing, and elegant'),
          goodsPictureUrl:
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
          originPrice: '40000',
          actualPrice: '29800',
          specifications: [
            {
              specTitle: i18n.t('Color'),
              specValue: i18n.t('Beige'),
            },
            {
              specTitle: i18n.t('Size'),
              specValue: i18n.t('S'),
            },
          ],
          buyQuantity: 1,
          itemTotalAmount: '29800',
          itemDiscountAmount: '4026',
          itemPaymentAmount: '25774',
          goodsPaymentPrice: '25774',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: [{ primary: false, type: 4, name: 'Apply for aftersale service' }],
        },
        {
          id: '132222629825260288',
          orderNo: null,
          spuId: '3',
          skuId: '135691622',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName:
            i18n.t('Tencent Aurora Box 4 Smart Internet TV Set-top Box 6K Gigabit Network Set-top Box 4K High Resolution'),
          goodsPictureUrl:
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3a.png',
          originPrice: '16900',
          actualPrice: '9900',
          specifications: [
            {
              specTitle: i18n.t('Color'),
              specValue: i18n.t('White'),
            },
            {
              specTitle: i18n.t('Type'),
              specValue: 'Classical edition',
            },
          ],
          buyQuantity: 1,
          itemTotalAmount: '9900',
          itemDiscountAmount: '1337',
          itemPaymentAmount: '8563',
          goodsPaymentPrice: '8563',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: [{ primary: false, type: 4, name: 'Apply for aftersale service' }],
        },
        {
          id: '132222629825260544',
          orderNo: null,
          spuId: '135681628',
          skuId: '135676629',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName:
            i18n.t('Hooded nap blanket for year of tiger, multifunctional, thickened, enlarged, and fleece-lined'),
          goodsPictureUrl:
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png',
          originPrice: '39900',
          actualPrice: '29900',
          specifications: [
            {
              specTitle: i18n.t('Color'),
              specValue: i18n.t('Light grey'),
            },
            {
              specTitle: i18n.t('Size'),
              specValue: i18n.t('S'),
            },
          ],
          buyQuantity: 4,
          itemTotalAmount: '119600',
          itemDiscountAmount: '4040',
          itemPaymentAmount: '115560',
          goodsPaymentPrice: '28890',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: [{ primary: false, type: 4, name: 'Apply for aftersale service' }],
        },
        {
          id: '132222629825260800',
          orderNo: null,
          spuId: '2',
          skuId: '135686631',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName: i18n.t('Sports hooded zipper sweatshirt with long sleeves, multiple colors and velvet fabric'),
          goodsPictureUrl:
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png',
          originPrice: '39900',
          actualPrice: '25900',
          specifications: [
            {
              specTitle: i18n.t('Color'),
              specValue: i18n.t('Green'),
            },
            {
              specTitle: i18n.t('Size'),
              specValue: i18n.t('XS'),
            },
          ],
          buyQuantity: 1,
          itemTotalAmount: '25900',
          itemDiscountAmount: '392',
          itemPaymentAmount: '25508',
          goodsPaymentPrice: '25508',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: [{ primary: false, type: 4, name: 'Apply for aftersale service' }],
        },
      ],
      logisticsVO: {
        logisticsType: 1,
        logisticsNo: '111112',
        logisticsStatus: null,
        logisticsCompanyCode: 'yunda',
        logisticsCompanyName: 'Yunda Express',

        receiverAddressId: '8',
        provinceCode: '440000',
        cityCode: '440300',
        countryCode: '440306',
        receiverProvince: 'Guangdong Province',
        receiverCity: 'Shenzhen',
        receiverCountry: 'Nanshan District',
        receiverArea: '',
        receiverAddress: 'No. 333 Qianhai Road, Sunshine Rose Garden',
        receiverPostCode: '',
        receiverLongitude: '113.829127',
        receiverLatitude: '22.713649',
        receiverIdentity: '700000011070005',
        receiverPhone: '17612345678',
        receiverName: 'Average line',
        expectArrivalTime: null,
        senderName: '',
        senderPhone: '',
        senderAddress: '',
        sendTime: '1599795293089',
        arrivalTime: null,
      },
      paymentVO: {
        payStatus: 1,
        amount: '458600',
        currency: 'CNY',
        payType: 0,
        payWay: null,
        payWayName: null,
        interactId: '66869',
        traceNo: null,
        channelTrxNo: null,
        period: null,
        payTime: '1594869391000',
        paySuccessTime: '1594869391287',
      },
      buttonVOs: [
        {
          primary: true,
          type: 3,
          name: 'Confirm receipt',
        },
      ],
      labelVOs: null,
      trajectoryVos: [
        {
          title: 'Shipped',
          icon: 'deliver',
          code: '200003',
          nodes: [
            {
              status: 'The order has been shipped by Yunda Express.',
              timestamp: '1599795293089',
              remark: null,
            },
          ],
          isShow: true,
        },
        {
          title: 'Order placed',
          icon: 'https://cdn-we-retail.ym.tencent.com/web/trajectoryIcons/ordered.svg',
          code: '200002',
          nodes: [
            {
              status: 'The order has been paid. Payment method: WeChat Pay',
              timestamp: '1594869391220',
              remark: null,
            },
          ],
          isShow: true,
        },
        {
          title: '',
          icon: null,
          code: '200001',
          nodes: [
            {
              status: 'The order has submitted.',
              timestamp: '1594869381185',
              remark: null,
            },
          ],
          isShow: true,
        },
      ],

      couponAmount: '5000',
      autoCancelTime: null,
      orderStatusName: 'To receive',
      orderSatusRemark: null,
      logisticsLogVO: null,
      invoiceStatus: 1,
      invoiceDesc: 'Invoice issued',
      invoiceUrl: null,
      invoiceVO: {
        buyerName: 'Company name XXXX', //个人或公司名称
        buyerTaxNo: 'R5647U7', //税号
        buyerPhone: '13534343434', //手机
        email: '123@qq.com', //邮箱
        titleType: 2, //发票抬头 1-个人 2-公司
        ontentType: 2, //发票内容 1-明细 2类别
        invoiceType: 5, //是否开票 0-不开 5-电子发票
        isInvoice: 'Invoice issued',
        money: 10000,
      },
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 74,
    success: true,
  },
  {
    data: {
      saasId: '88888888',
      storeId: '1000',
      storeName: i18n.t('Cloud Mall Shenzhen flagship store'),
      uid: '88888888205468',
      parentOrderNo: '130862219672031307',
      orderId: '130862224737571072',
      orderNo: '130862219672031307',
      orderType: 0,
      orderSubType: 0,
      orderStatus: 80,
      orderSubStatus: null,
      totalAmount: '298000',
      goodsAmount: '298000',
      goodsAmountApp: '298000',
      paymentAmount: '263200',
      freightFee: '0',
      packageFee: '0',
      discountAmount: '29800',
      channelType: 0,
      channelSource: '',
      channelIdentity: '',
      remark: '',
      cancelType: 3,
      cancelReasonType: 0,
      cancelReason: 'Payment times out',
      rightsType: 0,
      createTime: '1587049485895',
      orderItemVOs: [
        {
          id: '130862224922120960',
          orderNo: null,
          spuId: '0',
          skuId: '135676631',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName: i18n.t('White short-sleeve dress with ruffle hem, loose-fitting, Korean-style refreshing, and elegant'),
          goodsPictureUrl:
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
          originPrice: '40000',
          actualPrice: '29800',
          specifications: [
            { specTitle: i18n.t('Color'), specValue: i18n.t('Beige') },
            { specTitle: i18n.t('Size'), specValue: i18n.t('S') },
          ],
          buyQuantity: 10,
          itemTotalAmount: '298000',
          itemDiscountAmount: '29800',
          itemPaymentAmount: '268200',
          goodsPaymentPrice: '26820',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: null,
        },
      ],
      logisticsVO: {
        logisticsType: 1,
        logisticsNo: '',
        logisticsStatus: null,
        logisticsCompanyCode: '',
        logisticsCompanyName: '',
        receiverAddressId: '2',
        provinceCode: '440000',
        cityCode: '440300',
        countryCode: '440306',
        receiverProvince: 'Guangdong Province',
        receiverCity: 'Shenzhen',
        receiverCountry: 'Bao\'an District',
        receiverArea: '',
        receiverAddress: 'No. 28, Shajing Central Road, Lisha Huadu, Building XX, Unit XX',
        receiverPostCode: '',
        receiverLongitude: '113.829127',
        receiverLatitude: '22.713649',
        receiverIdentity: '88888888205468',
        receiverPhone: '17612345678',
        receiverName: 'Test user',
        expectArrivalTime: null,
        senderName: '',
        senderPhone: '',
        senderAddress: '',
        sendTime: null,
        arrivalTime: null,
      },
      paymentVO: {
        payStatus: 1,
        amount: '263200',
        currency: null,
        payType: null,
        payWay: null,
        payWayName: null,
        interactId: null,
        traceNo: null,
        channelTrxNo: null,
        period: null,
        payTime: null,
        paySuccessTime: null,
      },
      buttonVOs: null,
      labelVOs: null,
      invoiceVO: null,
      couponAmount: '5000',
      autoCancelTime: null,
      orderStatusName: 'Canceled (not paid)',
      orderSatusRemark: 'Payment times out',
      logisticsLogVO: null,
      invoiceStatus: 2,
      invoiceDesc: 'Do not need invoice',
      invoiceUrl: null,
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 70,
    success: true,
  },
  {
    data: {
      saasId: '88888888',
      storeId: '1000',
      storeName: i18n.t('Cloud Mall Shenzhen flagship store'),
      uid: '88888888205468',
      parentOrderNo: '130494472895208267',
      orderId: '130494482155052032',
      orderNo: '130494472895208267',
      orderType: 0,
      orderSubType: 0,
      orderStatus: 80,
      orderSubStatus: null,
      totalAmount: '59700',
      goodsAmount: '59700',
      goodsAmountApp: '59700',
      paymentAmount: '24900',
      freightFee: '0',
      packageFee: '0',
      discountAmount: '29800',
      channelType: 0,
      channelSource: '',
      channelIdentity: '',
      remark: '',
      cancelType: 3,
      cancelReasonType: 0,
      cancelReason: 'Payment times out',
      rightsType: 0,
      createTime: '1587027566726',
      orderItemVOs: [
        {
          id: '130494482322824704',
          orderNo: null,
          spuId: '7',
          skuId: '135691633',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName:
            i18n.t('Stainless steel knife, fork, and spoon set for home available in gold and silver color'),
          goodsPictureUrl:
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2b.png',
          originPrice: '29900',
          actualPrice: '19900',
          specifications: [
            { specTitle: i18n.t('Color'), specValue: i18n.t('Creamy yellow') },
            { specTitle: i18n.t('Type'), specValue: i18n.t('Three-piece set') },
          ],
          buyQuantity: 3,
          itemTotalAmount: '59700',
          itemDiscountAmount: '29800',
          itemPaymentAmount: '29900',
          goodsPaymentPrice: '9966',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: null,
        },
      ],
      logisticsVO: {
        logisticsType: 1,
        logisticsNo: '',
        logisticsStatus: null,
        logisticsCompanyCode: '',
        logisticsCompanyName: '',
        receiverAddressId: '2',
        provinceCode: '440000',
        cityCode: '440300',
        countryCode: '440306',
        receiverProvince: 'Guangdong Province',
        receiverCity: 'Shenzhen',
        receiverCountry: 'Bao\'an District',
        receiverArea: '',
        receiverAddress: 'No. 28, Shajing Central Road, Lisha Huadu, Building XX, Unit XX',
        receiverPostCode: '',
        receiverLongitude: '113.829127',
        receiverLatitude: '22.713649',
        receiverIdentity: '88888888205468',
        receiverPhone: '17612345678',
        receiverName: 'Test user',
        expectArrivalTime: null,
        senderName: '',
        senderPhone: '',
        senderAddress: '',
        sendTime: null,
        arrivalTime: null,
      },
      paymentVO: {
        payStatus: 1,
        amount: '24900',
        currency: null,
        payType: null,
        payWay: null,
        payWayName: null,
        interactId: null,
        traceNo: null,
        channelTrxNo: null,
        period: null,
        payTime: null,
        paySuccessTime: null,
      },
      buttonVOs: null,
      labelVOs: null,
      invoiceVO: null,
      couponAmount: '5000',
      autoCancelTime: null,
      orderStatusName: 'Canceled (not paid)',
      orderSatusRemark: 'Payment times out',
      logisticsLogVO: null,
      invoiceStatus: 3,
      invoiceDesc: 'Do not need invoice',
      invoiceUrl: null,
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 81,
    success: true,
  },
  {
    data: {
      saasId: '88888888',
      storeId: '1000',
      storeName: i18n.t('Cloud Mall Shenzhen flagship store'),
      uid: '88888888205468',
      parentOrderNo: '130169571554503755',
      orderId: '130169572291521792',
      orderNo: '130169571554503755',
      orderType: 0,
      orderSubType: 0,
      orderStatus: 50,
      orderSubStatus: null,
      totalAmount: '538000',
      goodsAmount: '538000',
      goodsAmountApp: '538000',
      paymentAmount: '508200',
      freightFee: '0',
      packageFee: '0',
      discountAmount: '29800',
      channelType: 0,
      channelSource: '',
      channelIdentity: '',
      remark: '',
      cancelType: 0,
      cancelReasonType: 0,
      cancelReason: '',
      rightsType: 10,
      createTime: '1587008200587',
      orderItemVOs: [
        {
          id: '130169572425740032',
          orderNo: null,
          spuId: '1',
          skuId: '135691631',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName: i18n.t('Pure cotton and round-neck short-sleeve T-shirt in pure white'),
          goodsPictureUrl:
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png',
          originPrice: '31900',
          actualPrice: '26900',
          specifications: [
            { specTitle: i18n.t('Color'), specValue: 'Orange' },
            { specTitle: i18n.t('Size'), specValue: i18n.t('M') },
          ],
          buyQuantity: 20,
          itemTotalAmount: '538000',
          itemDiscountAmount: '29800',
          itemPaymentAmount: '508200',
          goodsPaymentPrice: '25410',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: null,
        },
      ],
      logisticsVO: {
        logisticsType: 1,
        logisticsNo: '123',
        logisticsStatus: null,
        logisticsCompanyCode: 'zhongtong',
        logisticsCompanyName: 'ZTO Express',
        receiverAddressId: '2',
        provinceCode: '440000',
        cityCode: '440300',
        countryCode: '440306',
        receiverProvince: 'Guangdong Province',
        receiverCity: 'Shenzhen',
        receiverCountry: 'Bao\'an District',
        receiverArea: '',
        receiverAddress: 'No. 28, Shajing Central Road, Lisha Huadu, Building XX, Unit XX',
        receiverPostCode: '',
        receiverLongitude: '113.829127',
        receiverLatitude: '22.713649',
        receiverIdentity: '88888888205468',
        receiverPhone: '17612345678',
        receiverName: 'Test user',
        expectArrivalTime: null,
        senderName: '',
        senderPhone: '',
        senderAddress: '',
        sendTime: '1587008529453',
        arrivalTime: '1587008623995',
      },
      paymentVO: {
        payStatus: 2,
        amount: '508200',
        currency: 'CNY',
        payType: 0,
        payWay: 0,
        payWayName: 'WeChat Pay',
        interactId: '121212',
        traceNo: '121212',
        channelTrxNo: '121212',
        period: null,
        payTime: '2020-03-23 00:00:00',
        paySuccessTime: '2020-04-16 11:36:41',
      },
      buttonVOs: [
        { primary: false, type: 4, name: 'Apply for aftersale service' },
        { primary: true, type: 6, name: 'Review' },
      ],
      labelVOs: null,
      invoiceVO: {
        buyerName: 'Tencent Computer Systems Company Ltd.', //个人或公司名称
        buyerTaxNo: '9144 9808 0909 0293 XG', //税号
        buyerPhone: '18600008888', //手机
        email: '73900484@qq.com', //邮箱
        titleType: 2, //发票抬头 1-个人 2-公司
        ontentType: 1, //发票内容 1-明细 2类别
        invoiceType: 5, //是否开票 0-不开 5-电子发票
        money: '1.54',
      },
      couponAmount: '0',
      autoCancelTime: null,
      orderStatusName: 'Transaction completed.',
      orderSatusRemark: null,
      logisticsLogVO: null,
      invoiceStatus: 2,
      invoiceDesc: 'Do not need invoice',
      invoiceUrl: null,
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 91,
    success: true,
  },
  {
    data: {
      saasId: '88888888',
      storeId: '1000',
      storeName: i18n.t('Cloud Mall Shenzhen flagship store'),
      uid: '88888888205468',
      parentOrderNo: '130150835531421259',
      orderId: '130150836385879808',
      orderNo: '130150835531421259',
      orderType: 0,
      orderSubType: 0,
      orderStatus: 50,
      orderSubStatus: null,
      totalAmount: '29800',
      goodsAmount: '29800',
      goodsAmountApp: '29800',
      paymentAmount: '4000',
      freightFee: '0',
      packageFee: '0',
      discountAmount: '25800',
      channelType: 0,
      channelSource: '',
      channelIdentity: '',
      remark: '',
      cancelType: 0,
      cancelReasonType: 0,
      cancelReason: '',
      rightsType: 0,
      createTime: '1587007083839',
      orderItemVOs: [
        {
          id: '130150836520098048',
          orderNo: null,
          spuId: '0',
          skuId: '135681631',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName: i18n.t('White short-sleeve dress with ruffle hem, loose-fitting, Korean-style refreshing, and elegant'),
          goodsPictureUrl:
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
          originPrice: '40000',
          actualPrice: '29800',
          specifications: [
            { specTitle: i18n.t('Color'), specValue: i18n.t('Beige') },
            { specTitle: i18n.t('Size'), specValue: i18n.t('M') },
          ],
          buyQuantity: 1,
          itemTotalAmount: '29800',
          itemDiscountAmount: '25800',
          itemPaymentAmount: '4000',
          goodsPaymentPrice: '4000',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: null,
        },
      ],
      logisticsVO: {
        logisticsType: 1,
        logisticsNo: '123',
        logisticsStatus: null,
        logisticsCompanyCode: 'yuantong',
        logisticsCompanyName: 'YTO Express',
        receiverAddressId: '2',
        provinceCode: '440000',
        cityCode: '440300',
        countryCode: '440306',
        receiverProvince: 'Guangdong Province',
        receiverCity: 'Shenzhen',
        receiverCountry: 'Bao\'an District',
        receiverArea: '',
        receiverAddress: 'No. 28, Shajing Central Road, Lisha Huadu, Building XX, Unit XX',
        receiverPostCode: '',
        receiverLongitude: '113.829127',
        receiverLatitude: '22.713649',
        receiverIdentity: '88888888205468',
        receiverPhone: '17612345678',
        receiverName: 'Test user',
        expectArrivalTime: null,
        senderName: '',
        senderPhone: '',
        senderAddress: '',
        sendTime: '1587008539953',
        arrivalTime: '1588291200508',
      },
      paymentVO: {
        payStatus: 2,
        amount: '4000',
        currency: 'RNB',
        payType: 0,
        payWay: 0,
        payWayName: 'WeChat Pay',
        interactId: '121212',
        traceNo: '121212',
        channelTrxNo: '121212',
        period: null,
        payTime: '2020-03-23 00:00:00',
        paySuccessTime: '2020-04-16 11:18:09',
      },
      buttonVOs: [
        { primary: false, type: 4, name: 'Apply for aftersale service' },
        { primary: true, type: 6, name: 'Review' },
      ],
      labelVOs: null,
      invoiceVO: null,
      couponAmount: '0',
      autoCancelTime: null,
      orderStatusName: 'Transaction completed.',
      orderSatusRemark: null,
      logisticsLogVO: null,
      invoiceStatus: 2,
      invoiceDesc: 'Do not need invoice',
      invoiceUrl: null,
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 95,
    success: true,
  },
];

export function genOrderDetail(params) {
  const { parameter } = params;
  const resp = orderResps.find((r) => r.data.orderNo === parameter);
  return resp;
}

export function genBusinessTime() {
  const resp = {
    data: {
      businessTime: ['Mon, Tue, Wed, Thur, Fri,: 00:20:00-08:00:00'],
      telphone: '18565372257',
      saasId: '88888888',
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 3,
    success: true,
  };
  return resp;
}
