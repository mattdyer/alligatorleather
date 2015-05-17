<?php
	class MADComputing_QuoteViewer_adminhtml_QuoteViewerController extends Mage_adminhtml_Controller_Action
	{
		protected function _initAction(){
			return $this;
		}

		public function indexAction()
	    {
	        $this->_title($this->__('QuoteViewer'))
	             ->_title($this->__('Manage Quotes'));

	        $this->_initAction();
	        $this->renderLayout();
	    }

		public function gridAction(){
			$this->loadLayout();
			$this->renderLayout():
		}

		protected function _isAllowed(){
			return Mage::getSingleton('Admin/session')->isAllowed('/quoteviewer/list')
		}
	}
?>