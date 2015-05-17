<?php
/**
 * News List admin grid container
 *
 * @author Magento
 */
class MADComputing_QuoteViewer_Adminhtml_QuoteViewer extends Mage_Adminhtml_Block_Widget_Grid_Container
{
    /**
     * Block constructor
     */
    public function __construct()
    {
        $this->_blockGroup = 'madcomputing_quoteviewer';
        $this->_controller = 'adminhtml_news';
        $this->_headerText = Mage::helper('madcomputing_quoteviewer')->__('Manage News');

        parent::__construct();

        if (Mage::helper('madcomputing_quoteviewer/admin')->isActionAllowed('save')) {
            $this->_updateButton('add', 'label', Mage::helper('madcomputing_quoteviewer')->__('Add New News'));
        } else {
            $this->_removeButton('add');
        }
        $this->addButton(
            'news_flush_images_cache',
            array(
                'label'      => Mage::helper('madcomputing_quoteviewer')->__('Flush Images Cache'),
                'onclick'    => 'setLocation(\'' . $this->getUrl('*/*/flush') . '\')',
            )
        );

    }
}